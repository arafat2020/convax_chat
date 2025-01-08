import { defineTable } from "convex/server";
import { v } from "convex/values";

export const directMessage = defineTable({
    content: v.string(),
    fileUrl: v.optional(v.string()),
    memberId: v.id("member"),
    conversation: v.id("conversation")
}).index("by_conversation_member",["conversation","memberId"])