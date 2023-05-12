import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/table' element={<></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;