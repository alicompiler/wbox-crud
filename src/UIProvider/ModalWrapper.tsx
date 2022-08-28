import {useState} from "wbox-context";
import {State} from "../Data/State";
import {useUIComponent} from "./UIProvider";

export function ModalWrapper() {
    const state = useState<State>();
    const {modalComponent} = useUIComponent();
    return state.modal.open ? modalComponent() : null;
}