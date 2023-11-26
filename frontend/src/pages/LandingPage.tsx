import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
//@ts-ignore
import { useAuth } from '../AuthContext';




const Header: React.FC = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    // <header style={headerStyle}>
    //   <h1 style={{ color: 'white' }}>EcoSmart Home Hub</h1>
    //   <nav style={navStyle}>
    //     <Link to="/login" style={navLinkStyle}>Login</Link>
    //     <Link to="/register" style={navLinkStyle}>Register</Link>
    //     {auth.isAuthenticated && (
    //       <button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>
    //     )}
    //   </nav>
    // </header>


    <div style={navContainer}>
      
      <div style={{fontSize: "25px"}}><span style={{color:"#84C535"}}>ECO</span><span style={{opacity: "0.2"}}> SMART</span></div>
      
      <div> 
        <Link to="/login" style={LoginBtnStyle}>Login</Link>
      </div>

    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p style={{padding: 0, margin: 0, fontSize: "13px", backgroundColor: "rgba(0,0,0,0)"}}>&copy; 2023 EcoSmart Home Hub</p>
    </footer>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="HomePageContainer">

      <Header />

      <main style={{padding: "20px 5% 0px 5%"}}>

        <div style={HomeTitle}>
          <div style={{color:"#373737"}}><span style={{color:"#84C535"}}>Eco</span> Smart Hub</div>
          <div style={{color:"#373737"}}>Save on energy with <span style={{color:"#84C535"}}>us</span></div>
        </div>

        <p style={Text1}>
          EcoSmart Home Hub puts you in control. Whether you're looking to reduce energy consumption, 
          enhance security, or simply create a more comfortable living space, we have you covered.
        </p>

        <p style={Text2}>
          Get started today and embark on a journey towards a smarter, greener, and more connected home.
        </p>

        <div style={{display: "flex", flexDirection: "row", gap: "20px"}}>
          <Link to="/login" style={LoginBtnStyle2}>Login</Link>
          <Link to="/register" style={RegisterBtnStyle}>Register</Link>
        </div>

      </main>

      <Footer />

    </div>
  );
};

// Styles

const LoginBtnStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  background: "#84C535",
  padding: "8px 40px",
  borderRadius: "50px",
  boxShadow: "0px 5px 5px rgba(0,0,0,0.15)"
};

const navContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "30px 40px",
  fontFamily: 'Bebas Neue, sans-serif',
  alignItems: "center"
};

const HomeTitle: React.CSSProperties = {
  fontFamily: 'Bebas Neue, sans-serif',
  fontSize: "80px"
};

const Text1: React.CSSProperties = {
  maxWidth: "30rem",
  color: "rgba(0,0,0,0.45)",
  fontWeight: "350"
};
const Text2: React.CSSProperties = {
  maxWidth: "30rem",
  marginBottom: "40px",
  color: "rgba(0,0,0,0.45)",
  fontWeight: "350"
};

const RegisterBtnStyle: React.CSSProperties = {
  fontFamily: 'Bebas Neue, sans-serif',
  textDecoration: "none",
  color: '#84C535',
  border: "solid 2px #84C535",
  padding: "5px 25px",
  borderRadius: "50px"
};

const LoginBtnStyle2: React.CSSProperties = {
  fontFamily: 'Bebas Neue, sans-serif',
  textDecoration: "none",
  color: 'white',
  backgroundColor: "#84C535",
  border: "solid 2px #84C535",
  padding: "5px 25px",
  borderRadius: "50px"
};


const logoutButtonStyle: React.CSSProperties = {
  background: 'red',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
};

const footerStyle: React.CSSProperties = {
  color: 'rgba(0,0,0,0.3)',
  textAlign: 'center',
  bottom: '100',
  marginTop: '3rem',
  marginBottom: '2rem',
  width: '100%',
};



export default LandingPage;
