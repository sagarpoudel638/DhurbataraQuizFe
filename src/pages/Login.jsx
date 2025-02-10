import React,{ useState } from "react";
import "../assets/styles/Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from "react-toastify";
import {useAuth} from "../services/AuthContext.jsx"
const Login = () => {
  const { login,togglePasswordVisibility,showPassword } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
    toast.success("login in successful!");
    navigate("/dashboard");
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
        <h1>Welcome</h1>
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
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
                        className="login-eye-button"
                   
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </i>
          <button className="auth-button" type="submit" id="login-button">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default Login;
