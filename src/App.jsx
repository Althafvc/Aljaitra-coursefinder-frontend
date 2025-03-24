import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store"; 
import Login from './Pages/Login';
import ProtectedRoute from './protectedRoute';

const Dashboard = React.lazy(() => import('./Pages/Dashboard'));
const Output = React.lazy(() => import('./Pages/Output'));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Suspense fallback={<LoadingSpinner />}>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
            }
          />
          <Route
            path="/output"
            element={
              <ProtectedRoute>
                <Suspense fallback={<LoadingSpinner />}>
                  <Output />
                </Suspense>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

function LoadingSpinner() {
  return (
    <div className="h-full flex items-center justify-center mt-[20%] font-semibold text-lg">
      <img
        className="w-20 h-20 animate-spin mr-6"
        src="https://www.svgrepo.com/show/199956/loading-loader.svg"
        alt="Loading icon"
      />
      Loading...
    </div>
  );
}

export default App;
