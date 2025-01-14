import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createMember = mutation({
    args: {
        userId: v.id("userProfile"),
        serverId: v.id("server"),
        role: v.union(v.literal("admin"), v.literal("moderator"), v.literal("guest")),
    },
    handler(ctx, args) {
        return ctx.db.insert("member", args)
    },
})