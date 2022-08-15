import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CoreProvider} from "wbox-context";
import {modalReducer} from "../Data/Reducers/ModalReducer";
import {Modal} from "../Modal/Modal";
import {CrudProps} from "./CrudProps";

export function Crud(props: CrudProps) {
    const {modules} = props;
    return <BrowserRouter>
        <CoreProvider createServiceFactory={() => null}
                      reducers={[modalReducer]}
                      initialState={{
                          modal: undefined
                      }}>
            <h1>wbox-crud</h1>
            <Routes>
                {
                    modules.filter(module => module.navigationType === "page")
                        .map(module => <Route key={module.name}
                                              path={module.route!}
                                              element={<h1>TODO: display module</h1>}
                        />)
                }
            </Routes>
            <Modal/>
        </CoreProvider>
    </BrowserRouter>
}