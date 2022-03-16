import * as tg from "generic-type-guard";
export declare const isMapDataEvent: tg.TypeGuard<object & {
    data: object;
}>;
/**
 * A message sent from the game to the iFrame when the data of the layers change after the iFrame send a message to the game that it want to listen to the data of the layers
 */
export declare type MapDataEvent = tg.GuardedType<typeof isMapDataEvent>;
