import React, { useState } from 'react'
import FirstStep from './pages/FirstStep';
import StepGuide from './components/StepGuide';
import SecondStep from './pages/SecondStep';

const App = () => {
  const [stepCounter, setStepCounter] = useState(1);
  return (
    <div className="page page-center">
      <div className="container-tight py-4">
        {stepCounter === 1 && (
          <FirstStep
            stepCounter={stepCounter}
            setStepCounter={setStepCounter}
          />
        )}
        {stepCounter === 2 && (
          <SecondStep stepCounter={stepCounter} setStepCounter={setStepCounter} />
        )}
      </div>
    </div>)
}

export default App;