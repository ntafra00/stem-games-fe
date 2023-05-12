import React, { useState } from "react";
import FirstStep from "./components/FirstStep";

const LandingPage = () => {
    return (
        <div className="page page-center">
            <div className="container-tight py-4">
                <FirstStep
                />
            </div>
        </div>
    )
}

export default LandingPage;