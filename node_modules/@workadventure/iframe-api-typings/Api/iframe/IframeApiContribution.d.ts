import type * as tg from "generic-type-guard";
import type { IframeEvent, IframeEventMap, IframeQuery, IframeQueryMap, IframeResponseEventMap } from "../Events/IframeEvent";
export declare function sendToWorkadventure(content: IframeEvent<keyof IframeEventMap>): void;
export declare const answerPromises: Map<number, {
    resolve: (value: IframeQueryMap[keyof IframeQueryMap]["answer"] | PromiseLike<IframeQueryMap[keyof IframeQueryMap]["answer"]>) => void;
    reject: (reason?: any) => void;
}>;
export declare function queryWorkadventure<T extends keyof IframeQueryMap>(content: IframeQuery<T>): Promise<IframeQueryMap[T]["answer"]>;
export interface IframeCallback<Key extends keyof IframeResponseEventMap, T = IframeResponseEventMap[Key], Guard = tg.TypeGuard<T>> {
    typeChecker: Guard;
    callback: (payloadData: T) => void;
}
export interface IframeCallbackContribution<Key extends keyof IframeResponseEventMap> extends IframeCallback<Key> {
    type: Key;
}
/**
 * !! be aware that the implemented attributes (addMethodsAtRoot and subObjectIdentifier) must be readonly
 *
 *
 */
export declare abstract class IframeApiContribution<T extends {
    callbacks: Array<IframeCallbackContribution<keyof IframeResponseEventMap>>;
}> {
    abstract callbacks: T["callbacks"];
}
