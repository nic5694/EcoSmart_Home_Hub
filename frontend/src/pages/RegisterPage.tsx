import React, { useState } from "react";
import httpClient from "../httpClient";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  



  const headerStyle: React.CSSProperties = {
    background: 'green',
    padding: '1rem',
    textAlign: 'center',
  };

  const navStyle: React.CSSProperties = {
    marginTop: '1rem',
  };

  const navLinkStyle: React.CSSProperties = {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
  };

  const logoutButtonStyle: React.CSSProperties = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: 'white' }}>EcoSmart Home Hub</h1>
      <nav style={navStyle}>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/login" style={navLinkStyle}>Login</Link>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    background: 'green',
    padding: '1rem',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
      <p style={{ color: 'white' }}>&copy; 2023 EcoSmart Home Hub</p>
    </footer>
  );
};

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const endpointBasedUrl = process.env.REACT_APP_TEMPLATE_URL_BACKEND
  const isEmailValid = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const registerUser = async () => {
    try {
      const errorMessages = [];

      if (!email.trim() && !password.trim()) {
        errorMessages.push("Please fill in both email and password");
      } else {
        if (!email.trim()) {
          errorMessages.push("Please provide an email");
        }
  
        if (!password.trim()) {
          errorMessages.push("Please provide a password");
        }
  
        if (!isEmailValid(email)) {
          errorMessages.push("Please provide a valid email");
        }
      }
  
      if (errorMessages.length > 0) {
        errorMessages.forEach((message) => toast.error(message));
        return;
      }

      const resp = await httpClient.post(endpointBasedUrl + 'register', {
        email,
        password,
      });

      window.location.href = "/login";
      toast.success("Registration Successful")
    } catch (error: any) {
        toast.error("Could not make the Register Request")
    }
  };

  // Styles
  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  };

  const formStyle: React.CSSProperties = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Create an Account</h1>
      <div style={formContainerStyle}>
        <form style={formStyle}>
          <div>
            <label>Email: </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id=""
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id=""
            />
          </div>
          <button type="button" onClick={() => registerUser()}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
