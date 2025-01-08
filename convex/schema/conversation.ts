import { defineTable } from "convex/server";
import { v } from "convex/values";

export const conversation = defineTable({
    memberOneId: v.id("member"),
    memberTwoId: v.id("member"),
    directMessage: v.array(v.id("directMessage"))
})