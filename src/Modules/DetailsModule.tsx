import React from "react";
import {ModuleConfiguration} from "./ModuleConfiguration";

interface Props {
    module: ModuleConfiguration;
}

export function DetailsModule({module}: Props) {
    return <h1>Details Module: {module.name} - {module.title}</h1>
}