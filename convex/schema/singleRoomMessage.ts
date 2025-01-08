import { defineTable } from "convex/server";
import { v } from "convex/values";

export const singleRoomMessage = defineTable({
    content: v.string(),
    fileUrl: v.optional(v.string()),
    userId: v.id("userProfile"),
    singleChat: v.id("singleChat"),
    deleted: v.boolean(),
    createdAt: v.string(),
    updatedAt: v.string()
})