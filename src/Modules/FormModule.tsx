import React from "react";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function FormModule({module}: Props) {
    return <h1>Form Module: {module.name} - {module.title}</h1>
}