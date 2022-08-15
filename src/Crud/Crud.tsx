import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CoreProvider} from "wbox-context";
import {modalReducer} from "../Data/Reducers/ModalReducer";
import {Modal} from "../Modal/Modal";

export function Crud() {
    return <BrowserRouter>
        <CoreProvider createServiceFactory={() => null}
                      reducers={[modalReducer]}
                      initialState={{
                          modal: undefined
                      }}>
            <h1>wbox-crud</h1>

            <Modal/>
        </CoreProvider>
    </BrowserRouter>
}