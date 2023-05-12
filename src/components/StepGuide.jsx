import React from "react";

const steps = [
    {
        id: 1,
        name: "Step 1",
    },
    {
        id: 2,
        name: "Step 2",
    },
];

const StepGuide = ({ stepCounter }) => {
    return (
        <div className="steps steps-blue" style={{ width: "100%" }}>
            {steps.map((step, index) => {
                return (
                    <span className={stepCounter == step.id ? "step-item active" : "step-item"} key={index}>
                        {step.name}
                    </span>
                );
            })}
        </div>
    );
};

export default StepGuide;