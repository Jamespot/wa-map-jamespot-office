import * as tg from "generic-type-guard";
export declare const isMenuItemClickedEvent: tg.TypeGuard<object & {
    menuItem: string;
}>;
/**
 * A message sent from the game to the iFrame when a menu item is clicked.
 */
export declare type MenuItemClickedEvent = tg.GuardedType<typeof isMenuItemClickedEvent>;
