import React, {useContext} from "react";
import {FormFactory} from "wbox-forms/dist/Factory/FormFactory";
import {CollectionFactory, DefaultCollectionFactory} from "wbox-collections";
import {DefaultFormFactory} from "wbox-forms";

// TODO: set types for factories
export interface CrudFactory {
    formFactory: FormFactory<unknown>;
    collectionFactory: CollectionFactory<unknown>;
    infoFactory: unknown;       // TODO: SET FACTORY INTERFACE
    networkSubmitterFactory: unknown    // TODO : WRITE MODULE FOR NETWORK ACTIONS;
}

const defaults: CrudFactory = {
    formFactory: new DefaultFormFactory({}),
    collectionFactory: new DefaultCollectionFactory(),
    infoFactory: {},
    networkSubmitterFactory: {}
}

export const CrudFactoryContext = React.createContext<CrudFactory>(defaults);

export const CrudFactoryProvider = CrudFactoryContext.Provider;

export const useFactories = () => {
    const context = useContext(CrudFactoryContext);
    return {
        formFactory: context.formFactory,
        collectionFactory: context.collectionFactory,
        detailsFactory: context.infoFactory,
        io: context.networkSubmitterFactory
    }
}