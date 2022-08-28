import React from 'react';
import ReactDOM from 'react-dom/client';
import {Crud} from "./Crud/Crud";
import {ModuleType} from "./Modules/ModuleConfiguration";

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
                type: ModuleType.DETAILS,
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
        ]}/>
    </React.StrictMode>
);