import * as tg from "generic-type-guard";
export declare const isLoadTilesetEvent: tg.TypeGuard<object & {
    url: string;
}>;
/**
 * A message sent from the iFrame to the game to add a message in the chat.
 */
export declare type LoadTilesetEvent = tg.GuardedType<typeof isLoadTilesetEvent>;
