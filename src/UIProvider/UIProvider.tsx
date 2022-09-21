import React, {ReactElement, useContext} from "react";
import {CollectionFactory, DefaultCollectionFactory} from "wb-collections";
import {DefaultFormFactory, FormFactory} from "wb-forms";
import {DefaultModal} from "./DefaultModal";
import {DefaultRoutesWrapper} from "./DefaultRoutesWrapper";
import {DefaultTitleComponent} from "./DefaultTitleComponent";
import {ModuleConfiguration} from "../Modules/ModuleConfiguration";

export interface IUIProvider {
    formFactory: FormFactory<unknown>;
    collectionFactory: CollectionFactory<unknown>;
    detailsFactory: unknown;                            // TODO: SET FACTORY INTERFACE
    ioActionFactory: unknown;                           // TODO : WRITE MODULE FOR NETWORK ACTIONS
    routesComponent: () => ReactElement;
    modalComponent: () => ReactElement;
    titleComponent: (module: ModuleConfiguration) => ReactElement;
}

const defaults: IUIProvider = {
    formFactory: new DefaultFormFactory({}),
    collectionFactory: new DefaultCollectionFactory(),
    detailsFactory: {},
    ioActionFactory: {},
    routesComponent: () => <DefaultRoutesWrapper/>,
    modalComponent: () => <DefaultModal/>,
    titleComponent: (module) => <DefaultTitleComponent module={module}/>
}

export const UIContext = React.createContext<IUIProvider>(defaults);
export const UIProvider = UIContext.Provider;


export interface UseUIFactoryResult {
    formFactory: FormFactory<unknown>;
    collectionFactory: CollectionFactory<unknown>;
    detailsFactory: unknown;
    ioActionFactory: unknown;
}

export const useUIFactory = (): UseUIFactoryResult => {
    const context = useContext(UIContext);
    return {
        formFactory: context.formFactory,
        collectionFactory: context.collectionFactory,
        detailsFactory: context.detailsFactory,
        ioActionFactory: context.ioActionFactory
    }
}

export interface UseUIComponentResult {
    modalComponent: () => ReactElement;
    routesComponent: () => ReactElement;
    titleComponent: (module: ModuleConfiguration) => ReactElement;
}

export const useUIComponent = (): UseUIComponentResult => {
    const context = useContext(UIContext);
    return {
        modalComponent: context.modalComponent,
        routesComponent: context.routesComponent,
        titleComponent: context.titleComponent
    };
}