import * as tg from "generic-type-guard";
export declare const isButtonClickedEvent: tg.TypeGuard<object & {
    popupId: number;
    buttonId: number;
}>;
/**
 * A message sent from the game to the iFrame when a user enters or leaves a zone marked with the "zone" property.
 */
export declare type ButtonClickedEvent = tg.GuardedType<typeof isButtonClickedEvent>;
