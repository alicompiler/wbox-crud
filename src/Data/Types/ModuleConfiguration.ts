import {ModuleType} from "./ModuleType";
import {ModuleNavigationType} from "./ModuleNavigationType";

export interface ModuleConfiguration {
    name: string;
    title: string;
    type: ModuleType;
    navigationType: ModuleNavigationType;
    route?: string;
    factoryOption: unknown;
    factory?: unknown;
}