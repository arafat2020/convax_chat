"use server"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import { fetchMutation } from "convex/nextjs"
import { v4 as uuidv4 } from 'uuid';


export async function createServer({
    serverImage,
    serverName,
    profileId
}: {
    serverName: string,
    serverImage: string,
    profileId: Id<"userProfile">
}) {

    return fetchMutation(api.server.createServer, {
        avatar: serverImage,
        name: serverName,
        createdAt: Date.now().toLocaleString(),
        updatedAt: Date.now().toLocaleString(),
        inviteCode: uuidv4(),
        ownerId: profileId,
    })
}