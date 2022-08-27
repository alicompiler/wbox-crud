import {ReactElement} from "react";
import {ModuleConfiguration} from "../Data/Types/ModuleConfiguration";

export interface CrudProps {
    modules: ModuleConfiguration[];
    route: string;
    modalWrapper?: (props: CrudProps) => ReactElement
    routesWrapper?: (props: CrudProps) => ReactElement
}



