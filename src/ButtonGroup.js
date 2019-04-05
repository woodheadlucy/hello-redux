import React from "react";
import { store } from "./store";
import { setTechnology } from './actions'

const ButtonGroup = ({ technologies}) => (
    <div>
        {technologies.map((tech, i) =>(
            <button data-tech={tech} key={`btn-${i}`} className="hello-btn" onClick={dispatchBtnAction}>{tech} </button>
        ))}
    </div>
)
//this function - if user clicks react then dispatch action {type: "SET_TECHNOLOGY", text: "React"}, if user clicks elm then dispatch {type: "SET_TECHNOLOGY", text: "Elm"}
function dispatchBtnAction(event) {
    const tech = event.target.dataset.tech;
    store.dispatch(setTechnology(tech))
}

//sotre.dispatch() is how to dispatch an action in redux, and setTechnology() is the action creater 
export default ButtonGroup