import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getProfile = query({
    args: {
        clerkId: v.string()
    },
    handler: (ctx, args) => {
        return ctx.db.query("userProfile").filter(q => q.eq(q.field("clerkId"), args.clerkId)).unique()
    }
})

export const createProfile = mutation({
    args: {
        clerkId: v.string()
    },
    handler: (ctx, { clerkId }) => {
        return ctx.db.insert("userProfile", { clerkId })
    }
})