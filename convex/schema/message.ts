import { defineTable } from "convex/server";
import { v } from "convex/values";

export const message = defineTable({
    content: v.string(),
    fileUrl: v.optional(v.string()),
    memberId: v.id("userProfile"),
    channelId: v.id("channel"),
    deleted: v.boolean(),
    createdAt: v.string(),
    updatedAt: v.string()
}).index("by_member_and_channel", ["memberId", "channelId"])