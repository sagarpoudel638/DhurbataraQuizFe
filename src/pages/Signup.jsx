import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Auth.css";
const Signup = () => {

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Sign Up</h1>
        <form >
          <input
            type="text"
            placeholder="First Name"
            name="fName"
           
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lName"
            
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            
            required
          />
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            
            required
          />
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login"> Login </Link>
          </p>
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

export default Signup;
