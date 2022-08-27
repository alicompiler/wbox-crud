import React from "react";
import {useState} from "wbox-context";
import {State} from "../Data/State";

export function DefaultModal() {
    const state: State = useState();
    const moduleConfiguration = state.modal;
    if (!moduleConfiguration) {
        return null;
    }
    return <h1>TODO: display modal with the passed module configuration</h1>
}