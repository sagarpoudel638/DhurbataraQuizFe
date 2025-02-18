import React from "react";
import AchievementDisplay from "../components/AchievementDisplay";
import Categories from "../components/Categories";

const Dashboard = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        overflowY: "auto", // Add this for scrolling
        flexGrow: 1, // Add this if Dashboard is within a flex container
        height: "100%", // Add this to make Dashboard take full available height
      }}
    >
      {" "}
      <h1>Welcome to Your Dashboard</h1>
      <AchievementDisplay rank="12" points="1989" />
      <Categories />
    </div>
  );
};

export default Dashboard;
