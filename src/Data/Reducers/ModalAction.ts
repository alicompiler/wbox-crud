import {Action} from "wbox-context";

export enum ModalActionType {
    OPEN = "ModalAction@Open",
    CLOSE = "ModalAction@Close"
}

export type ModalAction<TPayload> = Action<ModalActionType, TPayload>;

export class ModalActions {
    public static open(moduleName: string): ModalAction<string> {
        return {
            type: ModalActionType.OPEN,
            payload: moduleName
        };
    }

    public static close(): ModalAction<undefined> {
        return {
            type: ModalActionType.CLOSE,
            payload: undefined
        };
    }
}