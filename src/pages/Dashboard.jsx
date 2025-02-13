import React from 'react';
import AchievementDisplay from '../components/AchievementDisplay';
import Categories from '../components/layout/Categories';


const Dashboard = () => {



  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Your Dashboard</h1>
      <AchievementDisplay rank="12" points="1989"/>
      <Categories/>

    </div>
  );
};

export default Dashboard;
