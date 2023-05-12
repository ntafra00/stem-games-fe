import React, { useState, useRef } from "react";
import Dropdown from "../../../components/Dropdown";
import { projectOptions } from "../../../consts";

const FirstStep = ({ setStepCounter }) => {
    const [isProjectSelected, setIsProjectSelected] = useState(false);

    const handleProjectSelection = () => {
        setIsProjectSelected(true);
    }

    return (
        <div className="card card-md">
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Choose test parameters</h2>
                <Dropdown options={projectOptions} setIsOptionSelected={handleProjectSelection} label='Select project' />
                {/* {isProjectSelected && <Dropdown label='Select family name' options={getFamilyOptions(projectOptions)} />} */}
            </div>
        </div>
    );
}

export default FirstStep;