import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const history = useNavigate();

  const navigateTo = (path) => {
    history.push(path);
  };

  return (
    <div className="main-page">
      <h1>Welcome to Tow-Go</h1>
      <div className="options">
        <button onClick={() => navigateTo("/schedule-tow-truck")}>
          Schedule Tow Truck
        </button>
        <button onClick={() => navigateTo("/schedule-uber")}>
          Schedule Uber
        </button>
        <button onClick={() => navigateTo("/service-history")}>
          Service History
        </button>
        <button onClick={() => navigateTo("/real-time-tracking")}>
          Real-Time Tracking
        </button>
      </div>
    </div>
  );
};

export default MainPage;
