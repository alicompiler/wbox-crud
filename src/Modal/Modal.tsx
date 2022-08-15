import React from "react";
import {useState} from "wbox-context";
import {State} from "../Data/State";

export function Modal() {
    const state: State = useState();
    const moduleConfiguration = state.modal;
    if (!moduleConfiguration) {
        return null;
    }
    console.log(moduleConfiguration);
    return <h1>TODO: display modal with the passed module configuration</h1>
}