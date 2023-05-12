import React, { useState, useRef } from "react";
import Dropdown from "../components/Dropdown";
import { projectOptions } from "../consts";

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