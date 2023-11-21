import React from "react";
import { Link } from 'react-router-dom';
//@ts-ignore
import { useAuth } from '../AuthContext';




const Header: React.FC = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: 'white' }}>EcoSmart Home Hub</h1>
      <nav style={navStyle}>
        <Link to="/login" style={navLinkStyle}>Login</Link>
        <Link to="/register" style={navLinkStyle}>Register</Link>
        {auth.isAuthenticated && (
          <button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>
        )}
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ color: 'white' }}>&copy; 2023 EcoSmart Home Hub</p>
    </footer>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div >
      <Header />
      <main >
        <h1>Welcome to EcoSmart Home Hub</h1>

         <p>
    Transform your living space into a smart and sustainable environment with EcoSmart Home Hub. 
    Control your lights, manage temperature, and enhance your home's energy efficiency – all in one place.
  </p>
  <p>
    Our user-friendly interface makes it easy to customize your smart home experience. 
    Connect with cutting-edge technologies to create a home that adapts to your lifestyle.
  </p>
  <p>
    EcoSmart Home Hub puts you in control. Whether you're looking to reduce energy consumption, 
    enhance security, or simply create a more comfortable living space, we have you covered.
  </p>
  <p>
    Get started today and embark on a journey towards a smarter, greener, and more connected home.
  </p>
      </main>
      <Footer />
    </div>
  );
};

// Styles
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

const footerStyle: React.CSSProperties = {
  background: 'green',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};



export default LandingPage;
