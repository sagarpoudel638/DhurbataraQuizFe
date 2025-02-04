import React, { createContext, useContext, useState } from "react";
import {
  userSignup,
  removeJWTtoken,
  setJWTtoken,
  getJWTtoken,
  verifyToken,
} from "./api.js";
import {  useNavigate } from "react-router-dom";
import { userLogin } from "./api.js";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [globalMessage, setGlobalMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

//***! Sign up */
const signup = async (signupData) => {
  try {
    const response = await userSignup(signupData);
    console.log(response);
    //const{name} = response.data;
    // setUser(name);
  } catch (error) {
    console.log(`Sign Up failed :${error}`);
    toast.error("Sign up Failed!");
    throw new Error("Sign Up  failed. Please check your credentials.");
  }
};
//*! Login */ 
const login = async (loginInfo) => {
    try {
      const response = await userLogin(loginInfo);
      console.log(response);
      const { user, token } = response.data;
      setJWTtoken(token);
      setUser(user);
      
    } catch (error) {
      console.log(`Login in failed :${error}`);
      throw new Error("login in  failed. Please check your credentials.");
    }
  };


  const autoLogin = async () => {
    const response = await verifyToken();
    if (response.status == "success") {
      setUser(response.data.user);
      console.log(response.data.user)
    }
  };
  const logout = () => {
    removeJWTtoken();
    setUser(null);
    navigate("/login");
  };
  

  const [showPassword, setShowPassword] = useState(false);  // State for password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  return (
    <AuthContext.Provider
      value={{
        globalMessage,
        setGlobalMessage,
        logout,
        autoLogin,
        user,
        signup,
        login,
        togglePasswordVisibility,
        setShowPassword,
        showPassword
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
