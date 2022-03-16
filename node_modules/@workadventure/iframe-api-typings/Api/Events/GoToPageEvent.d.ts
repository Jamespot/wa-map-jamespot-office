import * as tg from "generic-type-guard";
export declare const isGoToPageEvent: tg.TypeGuard<object & {
    url: string;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type GoToPageEvent = tg.GuardedType<typeof isGoToPageEvent>;
