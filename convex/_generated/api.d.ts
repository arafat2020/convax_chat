/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as schema_channel from "../schema/channel.js";
import type * as schema_conversation from "../schema/conversation.js";
import type * as schema_directMessage from "../schema/directMessage.js";
import type * as schema_friend from "../schema/friend.js";
import type * as schema_member from "../schema/member.js";
import type * as schema_message from "../schema/message.js";
import type * as schema_server from "../schema/server.js";
import type * as schema_singleChat from "../schema/singleChat.js";
import type * as schema_singleRoomMessage from "../schema/singleRoomMessage.js";
import type * as schema_user from "../schema/user.js";
import type * as server from "../server.js";
import type * as upload from "../upload.js";
import type * as userProfile from "../userProfile.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "schema/channel": typeof schema_channel;
  "schema/conversation": typeof schema_conversation;
  "schema/directMessage": typeof schema_directMessage;
  "schema/friend": typeof schema_friend;
  "schema/member": typeof schema_member;
  "schema/message": typeof schema_message;
  "schema/server": typeof schema_server;
  "schema/singleChat": typeof schema_singleChat;
  "schema/singleRoomMessage": typeof schema_singleRoomMessage;
  "schema/user": typeof schema_user;
  server: typeof server;
  upload: typeof upload;
  userProfile: typeof userProfile;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
