import {Reducer} from "wbox-context";
import {State} from "../State";
import {ModalAction, ModalActionType} from "./ModalAction";

export const modalReducer: Reducer<State, ModalAction<unknown>> = (state, action) => {
    switch (action.type) {
        case ModalActionType.OPEN:
            return {
                ...state, modal: {
                    open: true,
                    moduleName: action.payload as string
                }
            };
        case ModalActionType.CLOSE:
            return {
                ...state, modal: {
                    open: false,
                    moduleName: undefined
                }
            };

        default:
            return state;
    }
}