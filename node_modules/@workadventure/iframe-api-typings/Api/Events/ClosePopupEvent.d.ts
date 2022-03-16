import * as tg from "generic-type-guard";
export declare const isClosePopupEvent: tg.TypeGuard<object & {
    popupId: number;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type ClosePopupEvent = tg.GuardedType<typeof isClosePopupEvent>;
