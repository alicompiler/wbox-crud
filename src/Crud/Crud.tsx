import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CoreProvider} from "wbox-context";
import {modalReducer} from "../Data/Reducers/ModalReducer";
import {CrudProps} from "./CrudProps";
import {ModulesProvider} from "../Modules/ModulesProvider";
import {useUIComponent} from "../UIProvider/UIProvider";
import {ModalWrapper} from "../UIProvider/ModalWrapper";

export function Crud(props: CrudProps) {
    const {routesComponent} = useUIComponent();
    return <ModulesProvider value={props.modules}>
        <BrowserRouter>
            <CoreProvider createServiceFactory={() => null}
                          reducers={[modalReducer]}
                          initialState={{modal: {open: false, moduleName: undefined}}}>
                {routesComponent()}
                <ModalWrapper />
            </CoreProvider>
        </BrowserRouter>
    </ModulesProvider>
}
