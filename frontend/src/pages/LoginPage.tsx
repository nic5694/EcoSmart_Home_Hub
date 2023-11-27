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
    //     <Link to="/register" style={navLinkStyle}>Register</Link>
    //     {auth.isAuthenticated && (
    //       <button style={logoutButtonStyle} onClick={handleLogout}>Logout</button>
    //     )}
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
        errorMessages.push("Please input a valid email");
      }
    }

    if (errorMessages.length > 0) {
      errorMessages.forEach((message) => toast.error(message));
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
        toast.error("Invalid Credentials")
      }
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

  const loginFormConatiner : React.CSSProperties = {
      boxShadow: "2px 2px 10px 5px rgba(86, 86, 86, 0.10)",
      maxWidth: "50%",
      padding: "40px 8%",
      marginTop: "10px",
      borderRadius: "10px"
  };

  const Title : React.CSSProperties = {
    fontFamily: 'Bebas Neue, sans-serif',
    color: "#373737",
    fontSize: "60px"
  };

  const text : React.CSSProperties = {
    marginBottom: "15px",
    maxWidth: "17rem",
    color: "rgba(0,0,0,0.45)",
    fontWeight: "350",
    fontSize:"15px",
  };

  const InputField : React.CSSProperties = {
    width: "90%",
    height: "30px",
    paddingLeft: "20px",
    border:"solid 1px rgba(0,0,0,0.25)",
    borderRadius: "3px",
  };

  const LabelField : React.CSSProperties = {
    fontFamily: 'Bebas Neue, sans-serif',
    color: "rgba(0,0,0,0.45)"
  };

  const loginBtn : React.CSSProperties = {
    fontFamily: 'Bebas Neue, sans-serif',
    borderRadius: "5px",
    border: "1px solid #84C535",
    background: "#84C535",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    color: "white",
    padding: "8px 40px"

  };

  return (
    <div className="LoginContainer">
      <Header />
      {/* <h1 style={{ textAlign: 'center' }}>Log Into Your Account</h1>
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
      </div> */}

      <div style={{display:"flex",justifyContent: "center"}}>

        <div style={loginFormConatiner}>
          
          <div style={{display:"flex",justifyContent: "center"}}>

            <div>

              <div style={Title}>Log <span style={{color: "#84C535"}}>In</span></div>

              <div style={text}>Login to your account to access your own EcoSmart Hub.</div>

              <div>

                <form action="" style={{display:"flex",flexDirection:"column",gap:"10px"}}>

                  <div style={{display:"flex",flexDirection:"column",gap:"3px"}}>
                    <label style={LabelField}>E-mail</label>
                    <input style={InputField}  type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" /> 
                  </div>

                  <div style={{display:"flex",flexDirection:"column",gap:"3px", marginBottom:"20px"}}>
                    <label style={LabelField}>Password</label>
                    <input style={InputField} type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
                  </div>

                  <div>
                    <button style={loginBtn} type="button" onClick={() => logInUser()}>
                      Login
                    </button>
                  </div>

                </form>

              </div>

              <div style={{marginTop:"10px",display:"flex",flexDirection:"row",gap:"3px",fontSize:"13px"}}>
                <span style={{maxWidth: "30rem",color: "rgba(0,0,0,0.45)",fontWeight: "350"}}>Don't have an account ?</span> 
                <Link to="/register" style={{color:"#84C535"}}>Register</Link>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
