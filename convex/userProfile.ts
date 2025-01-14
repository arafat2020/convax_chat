import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getProfile = query({
    args: {
        clerkId: v.string()
    },
    handler: (ctx, args) => {
        return ctx.db.query("userProfile").filter(q => q.eq(q.field("clerkId"), args.clerkId)).unique()
    },
})

export const createProfile = mutation({
    args: {
        clerkId: v.string(),
        status: v.union(
            v.literal("active"),
            v.literal("inactive")
        )
    },
    handler: (ctx, { clerkId, status }) => {
        return ctx.db.insert("userProfile", { clerkId, status })
    }
})

export const updateProfile = mutation({
    args: {
        profileId: v.id("userProfile"),
        userName: (v.string()),
        profilePic: (v.string())
    },
    handler(ctx, args_0) {
        return ctx.db.patch(args_0.profileId, {
            profilePic: args_0.profilePic,
            userName: args_0.userName
        })
    },
})

export const toggleActive = mutation({
    args:{
        profileId: v.id("userProfile"),
        status: v.union(
            v.literal("active"),
            v.literal("inactive")
        )
    },
    handler(ctx, args_0) {
        return ctx.db.patch(args_0.profileId,{
            status: args_0.status
        })
    },
})