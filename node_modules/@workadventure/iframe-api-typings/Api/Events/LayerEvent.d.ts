import * as tg from "generic-type-guard";
export declare const isLayerEvent: tg.TypeGuard<object & {
    name: string;
}>;
/**
 * A message sent from the iFrame to the game to show/hide a layer.
 */
export declare type LayerEvent = tg.GuardedType<typeof isLayerEvent>;
