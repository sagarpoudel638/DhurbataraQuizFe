import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Auth.css";
import { useAuth } from "../services/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
  const { signup,togglePasswordVisibility,showPassword } = useAuth();
const navigate = useNavigate();
const [formData, setFormData] = useState({name: '',
  email: '',
  phoneNumber: '',
  password: ''})
  


const handleOnsubmit = async (e) => {
  e.preventDefault();
    await signup(formData);
    navigate("/login");

  

};
const handleOnchange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleOnsubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleOnchange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleOnchange}
            required
          />
          <input
            type="number"
            placeholder="Phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleOnchange}
            required
          />
          <i className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleOnchange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="eye-button"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </i>
          <button class="auth-button" type="submit">Sign Up</button>
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
