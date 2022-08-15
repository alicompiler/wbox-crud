import React from "react";
import {BrowserRouter} from "react-router-dom";
import {CoreProvider} from "wbox-context";

export function Crud() {
    return <BrowserRouter>
        <CoreProvider createServiceFactory={() => null} reducers={[]} initialState={{}}>
            <h1>wbox-crud</h1>
        </CoreProvider>
    </BrowserRouter>
}