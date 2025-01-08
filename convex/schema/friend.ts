import { defineTable } from "convex/server";
import { v } from "convex/values";

export const friend = defineTable({
    form: v.id("userProfile"),
    to: v.id("userProfile"),
    accepted: v.boolean(),
    blocked: v.boolean()
}).index("by_user",["form","to"])