import {Reducer} from "wbox-context";
import {State} from "../State";
import {ModalAction, ModalActionType} from "./ModalAction";
import {ModuleConfiguration} from "../Types/ModuleConfiguration";

export const modalReducer: Reducer<State, ModalAction<unknown>> = (state, action) => {
    switch (action.type) {
        case ModalActionType.OPEN:
            return {...state, modal: action.payload as ModuleConfiguration};
        case ModalActionType.CLOSE:
            return {...state, modal: undefined};

        default:
            return state;
    }
}