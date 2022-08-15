import {ModuleType} from "../Data/Types/ModuleType";
import {ModuleNavigationType} from "../Data/Types/ModuleNavigationType";

export interface CrudProps {
    modules: ModuleConfiguration[];
    route: string;
}

export interface ModuleConfiguration {
    name: string;
    title: string;
    type: ModuleType;
    navigationType: ModuleNavigationType;
    factoryOption: unknown;
    factory?: unknown;
}



