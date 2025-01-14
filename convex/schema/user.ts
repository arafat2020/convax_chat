import { defineTable } from "convex/server";
import { v } from "convex/values";

export const userProfile = defineTable({
    clerkId: v.string(),
    status: v.union(
        v.literal("active"),
        v.literal("inactive")
    ),
    userName: v.optional(v.string()),
    profilePic: v.optional(v.string())
}).index("byClerkId", ["clerkId"])