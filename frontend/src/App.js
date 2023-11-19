import './App.css';
import EcoSmartTitleComponent from './components/EcoSmartTitleComponent';
import LedLightPanel from './components/LedLightPanel';
import TimePanel from './components/TimePanel';
import HumidityPanel from './components/HumidityPanel';
import TemperaturePanel from './components/TemperaturePanel';
import FanPanel from './components/FanPanel';
import axios, {get} from "axios";
import {useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HubPage from './pages/HubPage';
import LandingPage from './pages/LandingPage';

import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';



function App() {

   
  return (
<>

<AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/hub" element={
          <PrivateRoute>
          <HubPage />
          </PrivateRoute>    
          } />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>

  );
}

export default App;
