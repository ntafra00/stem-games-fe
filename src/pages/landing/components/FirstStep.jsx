import React, { useState, useRef } from "react";
import Dropdown from "../../../components/Dropdown";
import { projectOptions } from "../../../consts";
import { getProductNames } from "../../../utils";

const FirstStep = ({ setStepCounter }) => {
    const [isProjectSelected, setIsProjectSelected] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");

    const handleProjectSelection = (project) => {
        setSelectedProject(project);
        setIsProjectSelected(true);
        console.log(project);
    }


    return (
        <div className="card card-md">
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Choose test parameters</h2>
                <Dropdown options={projectOptions} setIsOptionSelected={handleProjectSelection} label='Select project' />
                {isProjectSelected && <Dropdown label='Select family name' options={getProductNames(selectedProject)} />}
                {false && <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <button className="btn btn-primary" onClick={handleStepChange}>
                        Continue
                    </button>
                </div>}
            </div>
        </div>
    );
}

export default FirstStep;