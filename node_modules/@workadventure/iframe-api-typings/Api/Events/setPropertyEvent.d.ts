import * as tg from "generic-type-guard";
export declare const isSetPropertyEvent: tg.TypeGuard<object & {
    layerName: string;
    propertyName: string;
    propertyValue: string | number | boolean | undefined;
}>;
/**
 * A message sent from the iFrame to the game to change the value of the property of the layer
 */
export declare type SetPropertyEvent = tg.GuardedType<typeof isSetPropertyEvent>;
