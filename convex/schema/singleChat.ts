import { defineTable } from "convex/server";
import { v } from "convex/values";

export const singleChat = defineTable({
    userOneId: v.id("userProfile"),
    userTwoId: v.id("userProfile"),
    singleRoomMessage: v.array(v.id("singleRoomMessage"))
})