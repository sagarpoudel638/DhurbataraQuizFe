import React from "react";
import "../assets/styles/Auth.css"
import { Link } from "react-router-dom";
const Login = () => {
  return (

      <div className="wrapper">
        <div className="container">
          <h1>Welcome</h1>
          <form className="form">
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" id="login-button">
              Login
            </button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </form>
        </div>
        <ul className="bg-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>

  );
};

export default Login;
