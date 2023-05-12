import React from 'react'

const SecondStep = ({ setStepCounter }) => {

    const handleBackClick = () => {
        setStepCounter(1);
    }

    return (
        <div className="card card-md">
            <div className="card-body">
                <h2 className="card-title text-center mb-4">Upload file</h2>
                <div className="mb-3">
                    
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn btn-danger" onClick={handleBackClick}>
                        Go back
                    </button>
                    <button className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SecondStep;