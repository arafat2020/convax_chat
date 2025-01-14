"use server"

import { api } from "@/convex/_generated/api";
import { auth } from "@clerk/nextjs/server"
import { fetchQuery, fetchMutation } from "convex/nextjs";

export default async function getOrCreateUserProfile() {
    const { userId, } = await auth()
    if (!userId) throw new Error("Something Went Wrong")
    const isExist = await fetchQuery(api.userProfile.getProfile, {
      clerkId: userId
    })
    if (!isExist) {
      await fetchMutation(api.userProfile.createProfile, {
        clerkId: userId,
        status: "active"
      })
    }
}