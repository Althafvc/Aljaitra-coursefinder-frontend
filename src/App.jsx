import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store"; // Import Redux store
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Output from './Pages/Output';
import ProtectedRoute from './protectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/output" element={<ProtectedRoute><Output /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
