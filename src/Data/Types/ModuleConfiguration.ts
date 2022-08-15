import {ModuleType} from "./ModuleType";
import {ModuleNavigationType} from "./ModuleNavigationType";

export interface ModuleConfiguration {
    name: string;
    title: string;
    type: ModuleType;
    navigationType: ModuleNavigationType;
    factoryOption: unknown;
    factory?: unknown;
}