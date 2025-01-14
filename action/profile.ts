"use server"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { fetchMutation } from "convex/nextjs"

 export async function toggleActiveAction({
    userId,
    status
 }:{
    userId: Id<"userProfile">,
    status: "active" | "inactive"
 }) {
    return fetchMutation(api.userProfile.toggleActive,{
        profileId: userId,
        status
    })
 }