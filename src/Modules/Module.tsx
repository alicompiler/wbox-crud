import React from "react";
import {useModule} from "./ModulesProvider";
import {IndexModule} from "./IndexModule";
import {FormModule} from "./FormModule";
import {DetailsModule} from "./DetailsModule";
import {CollectionModule} from "./CollectionModule";
import {ActionModule} from "./ActionModule";
import {ModuleType} from "./ModuleConfiguration";

export interface Props {
    name: string;
}

export function Module({name}: Props) {
    const module = useModule(name);
    switch (module.type) {
        case ModuleType.MAIN:
            return <IndexModule module={module}/>;
        case ModuleType.FORM:
            return <FormModule module={module}/>;
        case ModuleType.INFO:
            return <DetailsModule module={module}/>;
        case ModuleType.COLLECTION:
            return <CollectionModule module={module}/>;
        case ModuleType.ACTION:
            return <ActionModule module={module}/>;
        default:
            throw new Error(`cannot find module with type: ${module.type}`);
    }
}