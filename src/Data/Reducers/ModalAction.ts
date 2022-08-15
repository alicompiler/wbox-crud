import {Action} from "wbox-context";
import {ModuleConfiguration} from "../Types/ModuleConfiguration";

export enum ModalActionType {
    OPEN = "ModalAction@Open",
    CLOSE = "ModalAction@Close"
}

export type ModalAction<TPayload> = Action<ModalActionType, TPayload>;

export class ModalActions {
    public static open(module: ModuleConfiguration): ModalAction<ModuleConfiguration> {
        return {
            type: ModalActionType.OPEN,
            payload: module
        };
    }

    public static close(): ModalAction<undefined> {
        return {
            type: ModalActionType.CLOSE,
            payload: undefined
        };
    }
}