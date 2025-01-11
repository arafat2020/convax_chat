import { defineTable } from "convex/server";
import { v } from "convex/values";

export const server = defineTable({
    name: v.string(),
    backgroundPic: v.optional(v.string()),
    ownerId: v.id("userProfile"),
    avatar: v.string(),
    inviteCode: v.string(),
    member: v.array(v.id("member")),
    channel: v.optional(v.array(v.id("channel"))),
    createdAt: v.string(),
    updatedAt: v.string()
}).index("by_user",["ownerId"])
.index("by_created_date",["createdAt"])