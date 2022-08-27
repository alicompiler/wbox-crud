import {Route, Routes} from "react-router-dom";
import React from "react";
import {ModuleConfiguration} from "../Modules/ModuleConfiguration";
import {useCrudNavigation} from "../Navigation/UseCrudNavigation";


// TODO : TO BE REMOVED
function DummyPage({modules, module}: { modules: ModuleConfiguration[] , module: ModuleConfiguration }) {
    const {navigate} = useCrudNavigation();

    return <div>
        <h1>{module.name}</h1>
        <h1>{module.title}</h1>
        <button onClick={() => navigate(modules[2])}>OPEN MODAL</button>
        <button onClick={() => navigate(modules[1])}>GOTO PAGE</button>
        <button onClick={() => navigate(modules[0])}>GOTO HOME</button>
    </div>
}


export function DefaultRoutesWrapper({modules} : {modules: ModuleConfiguration[]}) {
    return <Routes>
        {
            modules.filter(module => module.navigationType === "page")
                .map(module => <Route key={module.name}
                                      path={module.route!}
                                      element={<DummyPage module={module} modules={modules}/>}
                />)
        }
    </Routes>
}