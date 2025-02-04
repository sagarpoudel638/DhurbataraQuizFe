import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Your Dashboard</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="/settings" style={{ marginRight: '10px' }}>Settings</Link>
        <Link to="/help">Help</Link>
      </nav>
      <button onClick={handleLogout} style={{ backgroundColor: '#66E7EC', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
