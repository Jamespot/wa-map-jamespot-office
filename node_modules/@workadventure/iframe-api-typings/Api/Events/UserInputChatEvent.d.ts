import * as tg from "generic-type-guard";
export declare const isUserInputChatEvent: tg.TypeGuard<object & {
    message: string;
}>;
/**
 * A message sent from the game to the iFrame when a user types a message in the chat.
 */
export declare type UserInputChatEvent = tg.GuardedType<typeof isUserInputChatEvent>;
