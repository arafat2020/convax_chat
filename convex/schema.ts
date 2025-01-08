import { defineSchema, defineTable } from "convex/server";
import { userProfile } from "./schema/user";
import { server } from "./schema/server";
import { channel } from "./schema/channel";
import { member } from "./schema/member";
import { friend } from "./schema/friend";
import { directMessage } from "./schema/directMessage";
import { message } from "./schema/message";
import { conversation } from "./schema/conversation";
import { singleChat } from "./schema/singleChat";
import { singleRoomMessage } from "./schema/singleRoomMessage";

export default defineSchema({
    userProfile,
    server,
    channel,
    member,
    friend,
    directMessage,
    message,
    conversation,
    singleChat,
    singleRoomMessage
})