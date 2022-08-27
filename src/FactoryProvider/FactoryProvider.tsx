// TODO: set types for factories
import React from "react";

export interface CrudFactoriesContextState {
    formFactory: unknown;
    collectionFactory: unknown;
    infoFactory: unknown;
    networkSubmitterFactory: unknown;
}

export const CrudFactoryContext = React.createContext({});

export const CrudFactoryProvider = CrudFactoryContext.Provider;
