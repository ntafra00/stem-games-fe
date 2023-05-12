import React, { useState } from "react";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

const LandingPage = () => {
    const [stepCounter, setStepCounter] = useState(1);
    return (
        <div className="page page-center">
            <div className="container-tight py-4">
                <FirstStep
                    stepCounter={stepCounter}
                    setStepCounter={setStepCounter}
                />
            </div>
        </div>
    )
}

export default LandingPage;