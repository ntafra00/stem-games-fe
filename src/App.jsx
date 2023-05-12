import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './pages/landing';
import Table from './pages/table';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/table' element={<Table />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;