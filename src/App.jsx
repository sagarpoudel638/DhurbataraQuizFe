import { useState } from 'react'


import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
 return(<>
    <Routes>
        {/**Public pages */}
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        
        </Routes>
        </>
 )
  
}

export default App
