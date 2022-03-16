import * as tg from "generic-type-guard";
export declare const isChatEvent: tg.TypeGuard<object & {
    message: string;
    author: string;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type ChatEvent = tg.GuardedType<typeof isChatEvent>;
