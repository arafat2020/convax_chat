"use server"

import { api } from "@/convex/_generated/api"
import { fetchMutation } from "convex/nextjs"

export async function createServer(serverName: string, serverImage: string) {
    console.log(serverImage, serverName);

}