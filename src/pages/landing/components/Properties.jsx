import React from "react";
import Dropdown from "../../../components/Dropdown";

const Properties = ({ parameters }) => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="card-title mb-4">Adjust test parameters</span>
                <span className="card-title mb-4">Min</span>
                <span className="card-title mb-4">Max</span>
            </div>
            {parameters.map((parameter) => {
                return (
                    <div className="mb-4" style={{ display: 'flex', justifyContent: 'space-between' }} key={parameter.id}>
                        <span className="form-label">{parameter.name}</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>¸
                            <input type="range" />
                        </div>
                    </div >
                )
            })}

        </>
    )
}

export default Properties;