import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    
    userProfile: defineTable({
        clerkId: v.string()
    }).index("byClerkId", ["clerkId"]),

    server: defineTable({
        name: v.string(),
        backgroundPic: v.optional(v.string()),
        ownerId: v.id("userProfile")
    }).index("by_user",["ownerId"]),

    channel: defineTable({
        name: v.string(),
        serverId: v.id("server")
    }).index("by_server",["serverId"]),

    member: defineTable({
        userId: v.id("userProfile"),
        channelId: v.id("channel")
    }).index("by_userId",["userId"])
    .index("by_channelId",["channelId"]),

    message: defineTable({
        text: v.string(),
        senderId: v.id("userProfile"),
        channelId: v.id("channel")
    }).index("by_server",["channelId"])
    .index("by_sender",['senderId']),

    file: defineTable({
        url: v.string(),
        messageId: v.id("message")
    }).index("by_messageId",["messageId"])
})