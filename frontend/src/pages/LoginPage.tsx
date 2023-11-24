import React, { useState } from "react";
import httpClient from "../httpClient";
//@ts-ignore
import { useAuth } from "../AuthContext";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

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
        <Link to="/register" style={navLinkStyle}>Register</Link>
        {auth.isAuthenticated && (
          <button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>
        )}
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

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const endpointBasedUrl = process.env.REACT_APP_TEMPLATE_URL_BACKEND

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const logInUser = async () => {
    console.log(email, password);

    if (!isEmailValid(email)) {
      toast.error("Invalid Email Format");
      return;
    }

    try {
      const resp = await httpClient.post(endpointBasedUrl + '/login', {
        email,
        password,
      });
      auth.login();
      window.location.href = "/hub";
    } catch (error: any) {
      if (error.response.status === 401) {
        toast("Invalid Credentials")
      }
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
      <h1 style={{ textAlign: 'center' }}>Log Into Your Account</h1>
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
          <button type="button" onClick={() => logInUser()}>
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
