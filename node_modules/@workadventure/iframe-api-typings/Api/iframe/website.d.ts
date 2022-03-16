import { IframeApiContribution } from "./IframeApiContribution";
import { EmbeddedWebsite } from "./Room/EmbeddedWebsite";
import type { CreateEmbeddedWebsiteEvent } from "../Events/EmbeddedWebsiteEvent";
export declare class WorkadventureRoomWebsiteCommands extends IframeApiContribution<WorkadventureRoomWebsiteCommands> {
    callbacks: never[];
    get(objectName: string): Promise<EmbeddedWebsite>;
    create(createEmbeddedWebsiteEvent: CreateEmbeddedWebsiteEvent): EmbeddedWebsite;
    delete(objectName: string): Promise<void>;
}
declare const _default: WorkadventureRoomWebsiteCommands;
export default _default;
