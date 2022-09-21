import React from "react";
import {ModuleConfiguration} from "../Modules/ModuleConfiguration";

export function DefaultTitleComponent({module}: { module: ModuleConfiguration }) {
    return <div>
        <h1>{module.title}</h1>
    </div>
}
