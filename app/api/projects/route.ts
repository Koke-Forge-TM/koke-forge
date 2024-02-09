import {projects} from "@/data/projects"

export async function GET(request: Request) {
   return new Response(projects? JSON.stringify(projects): "No Projects 🥹🥹🥹")
}
