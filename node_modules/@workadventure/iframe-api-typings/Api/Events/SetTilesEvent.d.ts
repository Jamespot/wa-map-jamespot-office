import * as tg from "generic-type-guard";
export declare const isSetTilesEvent: tg.TypeGuard<(object & {
    x: number;
    y: number;
    tile: string | number | null;
    layer: string;
})[]>;
/**
 * A message sent from the iFrame to the game to set one or many tiles.
 */
export declare type SetTilesEvent = tg.GuardedType<typeof isSetTilesEvent>;
