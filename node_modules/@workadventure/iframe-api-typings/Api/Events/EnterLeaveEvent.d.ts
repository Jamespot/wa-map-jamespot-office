import * as tg from "generic-type-guard";
export declare const isEnterLeaveEvent: tg.TypeGuard<object & {
    name: string;
}>;
/**
 * A message sent from the game to the iFrame when a user enters or leaves a zone marked with the "zone" property.
 */
export declare type EnterLeaveEvent = tg.GuardedType<typeof isEnterLeaveEvent>;
