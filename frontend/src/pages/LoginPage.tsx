import React, { useState } from "react";
import httpClient from "../httpClient";
// @ts-ignore
import { useAuth } from "../AuthContext";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const logInUser = async () => {
    console.log(email, password);

    if (!isEmailValid(email)) {
      toast.error("Please input a valid email");
      return;
    }

    try {
      const resp = await httpClient.post("//localhost:5000/login", {
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

  return (
    <div>
      <h1>Log Into Your Account</h1>
      <form>
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
  );
};

export default LoginPage;