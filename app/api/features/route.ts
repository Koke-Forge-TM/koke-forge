import {features} from "@/data/featuresList"

export async function GET(request: Request) {
   // return new Response("No Features 🥹🥹🥹")
   return new Response(features? JSON.stringify(features): "No Features 🥹🥹🥹")
}
