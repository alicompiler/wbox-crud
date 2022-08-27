import React from 'react';
import ReactDOM from 'react-dom/client';
import {Crud} from "./Crud/Crud";
import {ModuleType} from "./Modules/ModuleType";

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
                options: {}
            },
            {
                route: '/details',
                navigationType: 'page',
                name: 'details',
                title: 'Details',
                type: ModuleType.INFO,
                factory: undefined,
                options: {}
            },
            {
                name: 'create',
                navigationType: 'modal',
                type: ModuleType.FORM,
                options: {},
                title: 'Create'
            }
        ]}
              route="/"/>
    </React.StrictMode>
);