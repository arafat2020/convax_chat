import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createServer = mutation({
    args: {
        name: v.string(),
        backgroundPic: v.optional(v.string()),
        ownerId: v.id("userProfile"),
        avatar: v.string(),
        inviteCode: v.string(),
        member: v.optional(v.array(v.id("member"))),
        channel: v.optional(v.array(v.id("channel"))),
        createdAt: v.string(),
        updatedAt: v.string()
    },
    handler: (ctx, args) => {
        return ctx.db.insert("server", args)
    }
})

export const getServerForUser = query({
    args:{
        userId: v.id("userProfile")
    },
    handler(ctx, {userId}) {
        return ctx.db.query("server").filter(q=>q.eq(q.field("ownerId"), userId)).collect()
    },
})
