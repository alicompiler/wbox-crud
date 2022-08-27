import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CoreProvider, useState} from "wbox-context";
import {modalReducer} from "../Data/Reducers/ModalReducer";
import {CrudProps} from "./CrudProps";
import {ModulesProvider} from "../Modules/ModulesProvider";
import {useUIComponent} from "../UIProvider/UIProvider";
import {State} from "../Data/State";

export function Crud(props: CrudProps) {
    const {modalComponent, routesComponent} = useUIComponent();
    const state = useState<State>();
    return <ModulesProvider value={props.modules}>
        <BrowserRouter>
            <CoreProvider createServiceFactory={() => null}
                          reducers={[modalReducer]}
                          initialState={{modal: {open: false, moduleName: undefined}}}>
                {routesComponent(props.modules)}
                {
                    state.modal.open && modalComponent(props.modules)
                }
            </CoreProvider>
        </BrowserRouter>
    </ModulesProvider>
}
