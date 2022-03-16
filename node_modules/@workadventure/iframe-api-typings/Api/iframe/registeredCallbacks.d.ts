import type { IframeResponseEventMap } from "../../Api/Events/IframeEvent";
import type { IframeCallback } from "../../Api/iframe/IframeApiContribution";
import type { IframeCallbackContribution } from "../../Api/iframe/IframeApiContribution";
export declare const registeredCallbacks: {
    [K in keyof IframeResponseEventMap]?: IframeCallback<K>;
};
export declare function apiCallback<T extends keyof IframeResponseEventMap>(callbackData: IframeCallbackContribution<T>): IframeCallbackContribution<keyof IframeResponseEventMap>;
