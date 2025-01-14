import { defineTable } from "convex/server";
import { v } from "convex/values";

export const member = defineTable({
    userId: v.id("userProfile"),
    serverId: v.id("server"),
    role: v.union(v.literal("admin"), v.literal("moderator"), v.literal("guest")),
    messages: v.optional(v.array(v.id("message"))),
    directMessages: v.optional(v.array(v.id("directMessage"))),
}).index("by_userId", ["userId"])
    .index("by_serverId", ["serverId"])