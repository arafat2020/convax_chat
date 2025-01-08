import { defineTable } from "convex/server";
import { v } from "convex/values";

export const userProfile = defineTable({
    clerkId: v.string(),
    status: v.union(
        v.literal("active"),
        v.literal("inactive")
    )
}).index("byClerkId", ["clerkId"])