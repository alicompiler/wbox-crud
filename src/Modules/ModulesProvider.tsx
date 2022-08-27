import React, {useContext} from "react";
import {ModuleConfiguration} from "../Data/Types/ModuleConfiguration";


export const ModulesContext = React.createContext<ModuleConfiguration[]>([]);

export const ModulesProvider = ModulesContext.Provider;

export function useModule(moduleName: string): ModuleConfiguration {
    const modules = useContext(ModulesContext);
    const module = modules.find(m => m.name === moduleName);
    if (!module) {
        throw new Error(`A module with the name: ${moduleName} not exist`);
    }
    return module;
}

export function useModules(): ModuleConfiguration[] {
    return useContext(ModulesContext);
}