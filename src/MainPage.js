import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <div className="main-page">
      <h1>Welcome to Tow-Go</h1>
      <div className="options">
        <button 
          className="btn schedule-tow-truck" 
          onClick={() => navigateTo("/schedule-tow-truck")}
          aria-label="Schedule a tow truck">
          Schedule Tow Truck
        </button>
        <button 
          className="btn schedule-uber" 
          onClick={() => navigateTo("/schedule-uber")}
          aria-label="Schedule an Uber">
          Schedule Uber
        </button>
        <button 
          className="btn service-history" 
          onClick={() => navigateTo("/service-history")}
          aria-label="View service history">
          Service History
        </button>
        <button 
          className="btn real-time-tracking" 
          onClick={() => navigateTo("/real-time-tracking")}
          aria-label="Access real-time tracking">
          Real-Time Tracking
        </button>
      </div>
    </div>
  );
};

export default MainPage;
