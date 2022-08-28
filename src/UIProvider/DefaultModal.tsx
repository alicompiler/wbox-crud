import React from "react";
import {useDispatch, useState} from "wbox-context";
import {State} from "../Data/State";
import {useModule} from "../Modules/ModulesProvider";
import {ModalActions} from "../Data/Reducers/ModalAction";
import {Module} from "../Modules/Module";

export function DefaultModal() {
    const state: State = useState();
    const {moduleName} = state.modal;
    const module = useModule(moduleName!);
    const dispatch = useDispatch();
    return <div id="myModal"
                style={{
                    display: 'flex',
                    position: 'fixed',
                    zIndex: 1,
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.4)'
                }}>

        <div className="modal-content"
             style={{
                 backgroundColor: '#fefefe',
                 padding: 20,
                 border: '1px solid #888',
                 width: '80%'
             }}>
            <h1>{module.title}</h1>
            <hr/>
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
            <span style={{
                fontSize: 28,
                float: 'right',
                color: '#AAA',
                fontWeight: 'bold'
            }} onClick={() => dispatch(ModalActions.close())} className="close">&times;</span>
            <Module name={moduleName!} />
        </div>
    </div>
}