import { v } from "convex/values";
import { query } from "./_generated/server";
import { Id } from "./_generated/dataModel";
import { getAll } from "convex-helpers/server/relationships";


export  const getActiveFriends = query({
    args:{
        profileId: v.id("userProfile")
    },
    async handler(ctx, args_0) {
        const friendInstance = await ctx.db.query("friend")
        .filter(q=>q.or(
            q.neq(q.field("form"),args_0.profileId),
            q.neq(q.field("to"),args_0.profileId)
        ))
        .filter(q=>q.eq(q.field("accepted"),true))
        .collect()
        const friendIds:Id<"userProfile">[] = await friendInstance.map(e=>{
            return e.form === args_0.profileId? e.to : e.form
        })

        return getAll(ctx.db, friendIds)
    },
})