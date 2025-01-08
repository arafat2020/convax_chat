import { defineTable } from "convex/server";
import { v } from "convex/values";

export const member = defineTable({
    userId: v.id("userProfile"),
    serverId: v.id("server"),
    messages: v.array(v.id("message")),
    directMessages: v.array(v.id("directMessage")),
}).index("by_userId", ["userId"])
    .index("by_serverId", ["serverId"])