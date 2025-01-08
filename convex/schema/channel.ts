import { defineTable } from "convex/server";
import { v } from "convex/values";

export const channel = defineTable({
    name: v.string(),
    serverId: v.id("server"),
    type: v.union(
        v.literal("text"),
        v.literal("audio"),
        v.literal("video")
    ),
    messages: v.array(v.id("message")),
    createdAt: v.string(),
    updatedAt: v.string()
}).index("by_server",["serverId"])