import React, { useState } from "react";
import httpClient from "../httpClient";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isEmailValid = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const registerUser = async () => {
    try {
      if (!isEmailValid(email)) {
        toast.error("Please input a valid email")
        return
      }
      
      const resp = await httpClient.post("//localhost:5000/register", {
        email,
        password,
      });

      window.location.href = "/login";
    } catch (error: any) {
      if (error.response.status === 401) {
        toast("Invalid Credentials")
      }
    }
  };

  return (
    <div>
      <h1>Create an account</h1>
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
        <button type="button" onClick={() => registerUser()}>
          Submit
        </button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
};

export default RegisterPage;