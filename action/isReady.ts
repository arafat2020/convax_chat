"use server"

import { api } from "@/convex/_generated/api"
import { auth } from "@clerk/nextjs/server"
import { fetchQuery } from "convex/nextjs"
import { redirect } from "next/navigation"

export async function isReady() {
    const { userId } = await auth()
    if (!userId) throw new Error("Unauthorize")
    const user = await fetchQuery(api.userProfile.getProfile, {
        clerkId: userId
    })
    !(!!user?.userName && !!user.profilePic) && redirect('/welcome')
}

