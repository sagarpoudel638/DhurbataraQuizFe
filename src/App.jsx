import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from './pages/Dashboard';
import { useAuth } from "./services/AuthContext";
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const { autoLogin, globalMessage, setGlobalMessage } = useAuth();
  useEffect(() => {
    autoLogin().catch(err => console.error("Autologin failed:", err));
  }, []);
  useEffect(() => {
    if (globalMessage) {
      toast(globalMessage);
      setGlobalMessage(null);
    }
  }, [globalMessage]);
 return(<>
    <Routes>
        {/**Public pages */}
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <ToastContainer/>

        </>
 )
  
}

export default App
