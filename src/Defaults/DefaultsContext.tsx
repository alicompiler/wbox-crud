import React, {ReactElement, useContext} from "react";
import {Modal} from "../Modal/Modal";
import {CrudProps} from "../Crud/CrudProps";
import {DefaultRoutesWrapper} from "../Crud/DefaultRoutesWrapper";

export interface Defaults {
    modalWrapper: (props: CrudProps) => ReactElement;
    routesWrapper: (props: CrudProps) => ReactElement;
}

const defaults: Defaults = {
    modalWrapper: () => <Modal/>,
    routesWrapper: (props) => <DefaultRoutesWrapper curdProps={props} />
}

export const DefaultsContext = React.createContext<Defaults>(defaults);

export const useDefaults = () => useContext(DefaultsContext);