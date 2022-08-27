export type ModuleNavigationType = "modal" | "page";

export enum ModuleType {
    FORM,
    COLLECTION,
    INFO,
    ACTION,
    MAIN
}

export interface ModuleConfiguration {
    name: string;
    title: string;
    type: ModuleType;
    navigationType: ModuleNavigationType;
    route?: string;
    options?: unknown;
    factory?: unknown;
}
