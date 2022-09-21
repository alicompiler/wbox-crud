import React from 'react';
import ReactDOM from 'react-dom/client';
import {Crud} from "./Crud/Crud";
import {ModuleType} from "./Modules/ModuleConfiguration";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
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
                route: '/toggle',
                navigationType: 'page',
                name: 'toggle',
                title: 'Toggle',
                type: ModuleType.ACTION,
                factory: undefined,
                options: {}
            },
            {
                route: '/search',
                navigationType: 'page',
                name: 'search',
                title: 'Search',
                type: ModuleType.COLLECTION,
                factory: undefined,
                options: {
                    providerOptions: {
                        fields: [
                            {name: 'id', title: '#'},
                            {name: 'name', title: 'Name'},
                        ],
                        fetchOptions: {
                            data: [
                                {id: 1, name: 'Ali'},
                                {id: 2, name: 'Huda'},
                                {id: 3, name: 'Fatima'},
                                {id: 4, name: 'Mohammed'},
                                {id: 4, name: 'Test'},
                            ]
                        }
                    },
                    renderOptions: {}
                }
            },
            {
                name: 'create',
                navigationType: 'modal',
                type: ModuleType.FORM,
                options: {
                    fields: {
                        name: {
                            type: 'text',
                            options: {
                                name: 'name'
                            }
                        },
                        email: {
                            type: 'text',
                            options: {
                                name: 'email',
                                validationRules: '^ali@email.com$'
                            }
                        },
                        phone: {
                            type: 'text',
                            options: {
                                name: 'phone'
                            }
                        }
                    }
                },
                title: 'Create'
            },
            {
                name: 'update',
                navigationType: 'modal',
                type: ModuleType.FORM,
                options: {},
                title: 'Update'
            },
            {
                name: 'delete',
                navigationType: 'modal',
                type: ModuleType.FORM,
                options: {},
                title: 'Delete'
            },
        ]}/>
);

