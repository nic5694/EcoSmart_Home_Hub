import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
// @ts-ignore
import { useAuth } from '../AuthContext';


const LandingPage: React.FC = () => {

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();

  };

  return (
    <div>
      <h1>Welcome to this React Application</h1>
    
          <div>
            <a href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>Register</button>
            </a>
          </div>

          <div>
            
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
        
   
  );
};

export default LandingPage;