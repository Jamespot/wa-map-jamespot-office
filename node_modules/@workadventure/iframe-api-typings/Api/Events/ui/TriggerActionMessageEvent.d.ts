import * as tg from "generic-type-guard";
export declare const triggerActionMessage = "triggerActionMessage";
export declare const removeActionMessage = "removeActionMessage";
export declare const isActionMessageType: tg.TypeGuard<"message" | "warning">;
export declare type ActionMessageType = tg.GuardedType<typeof isActionMessageType>;
export declare const isTriggerActionMessageEvent: tg.TypeGuard<object & {
    message: string;
    uuid: string;
    type: "message" | "warning";
}>;
export declare type TriggerActionMessageEvent = tg.GuardedType<typeof isTriggerActionMessageEvent>;
export declare const isMessageReferenceEvent: tg.TypeGuard<object & {
    uuid: string;
}>;
export declare type MessageReferenceEvent = tg.GuardedType<typeof isMessageReferenceEvent>;
