import React from 'react';
import ReactDOM from 'react-dom/client';
import {Crud} from "./Crud/Crud";
import {ModuleType} from "./Data/Types/ModuleType";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Crud modules={[
            {
                route: '/',
                navigationType: 'page',
                name: 'index',
                title: 'Test Index Page',
                type: ModuleType.MAIN,
                factory: undefined,
                factoryOption: {}
            },
            {
                route: '/details',
                navigationType: 'page',
                name: 'details',
                title: 'Details',
                type: ModuleType.INFO,
                factory: undefined,
                factoryOption: {}
            },
            {
                name: 'create',
                navigationType: 'modal',
                type: ModuleType.FORM,
                factoryOption: {},
                title: 'Create'
            }
        ]}
              route="/"/>
    </React.StrictMode>
);