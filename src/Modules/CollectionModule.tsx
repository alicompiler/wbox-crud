import React from "react";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function CollectionModule({module}: Props) {
    return <h1>Collection Module: {module.name} - {module.title}</h1>
}