import React from "react";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function ActionModule({module}: Props) {
    return <h1>Action Module: {module.name} - {module.title}</h1>
}