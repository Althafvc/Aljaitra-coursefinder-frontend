import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login' // Ensure the Login component is correctly imported
import Dashboard from './Pages/Dashboard';
import Output from './Pages/Output'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/output' element={<Output/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;