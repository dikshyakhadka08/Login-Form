import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Loginform.css";
import { FaUser, FaLock } from "react-icons/fa";
// import {Outlet,Link,Routes,BrowserRouter,Route} from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    navigate("/nextpage");
  };

  return (

    <div className="wrapper">
      <form onSubmit={handleSubmit}>
      <AiOutlineLogin className="icon" />{" "}
        <h1>Login Form</h1>
        <div className="input-box">
          <FaUser className="icon" />{" "}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <br />
          <a href="/nextpage"> Forgot Password?</a>
        </div>
        <br />
          <button type="submit">Log in</button>
    
        <div className="register-link">
          <p>
            Don't have an account ? <a href="#">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Loginform;
