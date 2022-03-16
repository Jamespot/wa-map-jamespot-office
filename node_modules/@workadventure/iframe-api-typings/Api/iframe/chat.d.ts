import { IframeApiContribution } from "./IframeApiContribution";
export declare class WorkadventureChatCommands extends IframeApiContribution<WorkadventureChatCommands> {
    callbacks: import("./IframeApiContribution").IframeCallbackContribution<keyof import("../Events/IframeEvent").IframeResponseEventMap>[];
    sendChatMessage(message: string, author: string): void;
    /**
     * Listen to messages sent by the local user, in the chat.
     */
    onChatMessage(callback: (message: string) => void): void;
}
declare const _default: WorkadventureChatCommands;
export default _default;
