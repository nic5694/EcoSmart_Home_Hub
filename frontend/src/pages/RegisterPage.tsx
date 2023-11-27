import React, { useState } from "react";
import httpClient from "../httpClient";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  
  // const headerStyle: React.CSSProperties = {
  //   background: 'green',
  //   padding: '1rem',
  //   textAlign: 'center',
  // };

  // const navStyle: React.CSSProperties = {
  //   marginTop: '1rem',
  // };

  // const navLinkStyle: React.CSSProperties = {
  //   margin: '0 1rem',
  //   color: 'white',
  //   textDecoration: 'none',
  // };

  // const logoutButtonStyle: React.CSSProperties = {
  //   background: 'red',
  //   color: 'white',
  //   border: 'none',
  //   padding: '0.5rem 1rem',
  //   cursor: 'pointer',
  // };

  const navContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 40px",
    fontFamily: 'Bebas Neue, sans-serif',
    alignItems: "center"
  };

  const LoginBtnStyle: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    background: "#84C535",
    padding: "8px 40px",
    borderRadius: "50px",
    boxShadow: "0px 5px 5px rgba(0,0,0,0.15)"
  };

  return (
    // <header style={headerStyle}>
    //   <h1 style={{ color: 'white' }}>EcoSmart Home Hub</h1>
    //   <nav style={navStyle}>
    //     <Link to="/" style={navLinkStyle}>Home</Link>
    //     <Link to="/login" style={navLinkStyle}>Login</Link>
    //   </nav> 
    // </header>

    <div style={navContainer}>
      
        <Link style={{textDecoration: "none"}} to="/"><div style={{fontSize: "25px"}}><span style={{color:"#84C535"}}>ECO</span><span style={{opacity: "0.2"}}> SMART</span></div></Link>
        
        <div> 
          <Link to="/login" style={LoginBtnStyle}>Login</Link>
        </div>

      </div>
  );
};

const Footer: React.FC = () => {
  // const footerStyle: React.CSSProperties = {
  //   background: 'green',
  //   padding: '1rem',
  //   textAlign: 'center',
  //   position: 'fixed',
  //   bottom: '0',
  //   width: '100%',
  // };

  const footerStyle: React.CSSProperties = {
    color: 'rgba(0,0,0,0.3)',
    textAlign: 'center',
    bottom: '100',
    marginTop: '3rem',
    marginBottom: '2rem',
    width: '100%',
  };

  return (
    // <footer style={footerStyle}>
    //   <p style={{ color: 'white' }}>&copy; 2023 EcoSmart Home Hub</p>
    // </footer>

    <footer style={footerStyle}>
      <p style={{padding: 0, margin: 0, fontSize: "13px", backgroundColor: "rgba(0,0,0,0)"}}>&copy; 2023 EcoSmart Home Hub</p>
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
  // const formContainerStyle: React.CSSProperties = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginTop: '2rem',
  // };

  // const formStyle: React.CSSProperties = {
  //   width: '300px',
  //   border: '1px solid #ccc',
  //   borderRadius: '8px',
  //   padding: '16px',
  //   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  // };

    // const ... : React.CSSProperties = {

    // };

    const registerFormConatiner : React.CSSProperties = {
      boxShadow: "2px 2px 10px 5px rgba(86, 86, 86, 0.10)",
      maxWidth: "45%",
      padding: "35px 40px",
      margin: "20px 5%",
      borderRadius: "10px",
    };

    const Title : React.CSSProperties = {
      fontFamily: 'Bebas Neue, sans-serif',
      color: "#373737",
      fontSize: "60px"
    };

    const text : React.CSSProperties = {
      marginBottom: "30px",
      maxWidth: "27rem",
      color: "rgba(0,0,0,0.45)",
      fontWeight: "350",
      fontSize:"15px"
    };

    const InputField : React.CSSProperties = {
      width: "60%",
      height: "30px",
      paddingLeft: "20px",
      border:"solid 1px rgba(0,0,0,0.25)",
      borderRadius: "3px",
    };

    const LabelField : React.CSSProperties = {
      fontFamily: 'Bebas Neue, sans-serif',
      color: "rgba(0,0,0,0.45)"
    };

    const registerBtn : React.CSSProperties = {
      fontFamily: 'Bebas Neue, sans-serif',
      borderRadius: "5px",
      border: "1px solid #84C535",
      background: "#84C535",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      color: "white",
      padding: "8px 40px"

    };

    const lastLine : React.CSSProperties = {

    };

  return (
    <div className="RegisterContainer">
      <Header />
      {/* <h1 style={{ textAlign: 'center' }}>Create an Account</h1>
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
      </div> */}

      <div style={registerFormConatiner}>

        <div style={Title}><span style={{color: "#84C535"}}>Register</span> With Us</div>

        <div style={text}>Welcome to the registration section. Please fill out all the necessary fields, and when finished, click on Register.</div>

        <div>

          <form style={{display:"flex",flexDirection:"column",gap:"10px"}}>

            <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
              <input style={InputField} type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
              <label style={LabelField}>E-mail</label>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"3px", marginBottom:"10px"}}>
              <input style={InputField} type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
              <label style={LabelField}>Password</label>
            </div>

            <div>
              <button style={registerBtn} type="button" onClick={() => registerUser()}>
                Register
              </button>
            </div>

          </form>
        </div>
        <div style={{marginTop:"10px",display:"flex",flexDirection:"row",gap:"3px",fontSize:"13px"}}>
          <span style={{maxWidth: "30rem",color: "rgba(0,0,0,0.45)",fontWeight: "350"}}>Already have an account ?</span> 
          <Link to="/login" style={{color:"#84C535"}}>Login</Link>
        </div>

      </div>


      <Footer />
    </div>
  );
};

export default RegisterPage;
