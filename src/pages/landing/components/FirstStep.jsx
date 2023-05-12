import React, { useState, useEffect } from "react";
import Dropdown from "../../../components/Dropdown";
import { projectOptions } from "../../../consts";
import { getParameters, getProductNames } from "../../../utils";
import { useNavigate } from 'react-router-dom'
import Properties from "./Properties";

const FirstStep = () => {
    const navigate = useNavigate();
    const [isProjectSelected, setIsProjectSelected] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isChipSelected, setIsChipSelected] = useState(false);
    const [selectedChip, setSelectedChip] = useState(null);

    const handleProjectSelection = (project) => {
        setSelectedProject(project);
        setIsProjectSelected(true);
    }

    const handleChipSelection = (chip) => {
        setSelectedChip(chip)
        setIsChipSelected(true)
    }

    const handleButtonClick = () => {
        navigate('/table', { replace: true })
    }

    const mapProductNamesToOptions = (products) => {
        return products.map((product) => {
            return {
                'value': product.name,
                'label': product.name
            }
        })
    }

    useEffect(() => {
        setSelectedChip(null);
        setIsChipSelected(false);
    }, [selectedProject])

    return (
        <>
            <div className="card card-md">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Choose test parameters</h2>
                    <Dropdown options={projectOptions} setIsOptionSelected={handleProjectSelection} label='Select project' />
                    {isProjectSelected && <Dropdown label='Select family name' options={mapProductNamesToOptions(getProductNames(selectedProject.value))} setIsOptionSelected={handleChipSelection} selectedValue={selectedChip} />}
                </div>
            </div>
            {
                isChipSelected && <div className="card card-md">
                    <div className="card-body">
                        <Properties parameters={getParameters(selectedProject.value, '')} />
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <button className="btn btn-primary" onClick={handleButtonClick}>Continue</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default FirstStep;