import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CoreProvider} from "wbox-context";
import {modalReducer} from "../Data/Reducers/ModalReducer";
import {CrudProps} from "./CrudProps";
import {useDefaults} from "../Defaults/DefaultsContext";


export function Crud(props: CrudProps) {
    const defaults = useDefaults();
    const routesWrapper = props.routesWrapper ?? defaults.routesWrapper;
    const modalWrapper = props.modalWrapper ?? defaults.modalWrapper;
    return <BrowserRouter>
        <CoreProvider createServiceFactory={() => null}
                      reducers={[modalReducer]}
                      initialState={{modal: undefined}}>
            <h1>wbox-crud</h1>
            {routesWrapper(props)}
            {modalWrapper(props)}
        </CoreProvider>
    </BrowserRouter>
}
