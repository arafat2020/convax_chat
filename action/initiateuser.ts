"use server"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { fetchMutation } from "convex/nextjs"
import { redirect } from "next/navigation"

export async function initiateUser(data:{ userName: string, profileId: Id<"userProfile">, profilePic: string }) {
        await fetchMutation(api.userProfile.updateProfile, data)
        return redirect('/')
}