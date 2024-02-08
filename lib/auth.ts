import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import toBase64 from "@/lib/toBase64";

const apiUrl: string = process.env.BACK_API_URL ? process.env.BACK_API_URL : ""

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {label: "Email", type: "text", placeholder: "email"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                const credentialString: string = `${credentials?.username}:${credentials?.password}`;
                const credentialsB64: string = toBase64(credentialString);
                try {
                    const res = await fetch(apiUrl + "/login/", {
                        method: 'POST',
                        body: "",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Basic " + credentialsB64,
                        }
                    })

                    const user = await res.json()

                    console.log(user)

                    // If no error and we have user data, return it
                    if (res.ok && user) {
                        return user
                    } else {
                        throw new Error(JSON.stringify({"error": user.error, "ok": false}))
                    }
                } catch (e: any) {
                    throw new Error(e?.message as any)
                }

            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user}
        },
        async session({session, token, user}) {
            session.user = token as any;
            return session;
        }
    },
    secret: process.env.JWT_SECRET,
    pages: {
        /// signIn: '/login'
    }
};