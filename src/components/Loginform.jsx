import React from "react";
import "../App.css";
import "./Loginform.css";
import { FaUser ,FaLock} from "react-icons/fa";


const Loginform = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login Form</h1>
        <div className="input-box">
        <FaUser className="icon" /> <input type="text" placeholder="Username" required />
        </div>

        <div className="input-box">
        <FaLock className="icon"/><input type="password" placeholder="Password" required />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#"> Forgot Password?</a>
        </div>
        <br />
        
        <button type="submit">Log in</button>
        <br /><br />
        <div classname ="register-link"><p>Don't have an account ? <a href ="#">Register</a></p>
          </div>
      </form>
    </div>
  );
};

export default Loginform;
