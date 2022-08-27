import React from "react";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function IndexModule({module}: Props) {
    return <h1>Main Module: {module.name} - {module.title}</h1>
}