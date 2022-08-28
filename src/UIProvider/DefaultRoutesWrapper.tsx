import {Route, Routes} from "react-router-dom";
import React from "react";
import {ModuleConfiguration} from "../Modules/ModuleConfiguration";
import {useCrudNavigation} from "../Navigation/UseCrudNavigation";
import {useModules} from "../Modules/ModulesProvider";
import {Module} from "../Modules/Module";


// TODO : TO BE REMOVED
function DummyPage({module}: { module: ModuleConfiguration }) {
    const {navigate} = useCrudNavigation();
    const modules = useModules();
    return <div>
        <Module name={module.name} />
        <div>
            {
                modules.filter(m => m.navigationType === 'page' && m.name !== module.name)
                    .map(m => <button key={m.name}
                                      style={{display: 'block'}}
                                      onClick={() => navigate(m)}>GOTO {m.name}</button>)
            }
        </div>

        <div>
            {
                modules.filter(m => m.navigationType === 'modal')
                    .map(m => <button key={m.name}
                                      style={{display: 'block'}}
                                      onClick={() => navigate(m)}>OPEN {m.name}</button>)
            }
        </div>
    </div>
}


export function DefaultRoutesWrapper() {
    const modules = useModules();
    return <Routes>
        {
            modules.filter(module => module.navigationType === "page")
                .map(module => <Route key={module.name}
                                      path={module.route!}
                                      element={<DummyPage module={module}/>}
                />)
        }
    </Routes>
}