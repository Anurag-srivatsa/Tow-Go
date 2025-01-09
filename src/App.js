/*import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard'; // Create this as a placeholder

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route path="/dashboard" component={Dashboard} />*/
          //{/* Add other routes as necessary */}
        /*</Switch>
      </div>
    </Router>
  );
}

export default App;*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.js";
import ScheduleTowTruck from "./ScheduleTowTruck.js";
import ScheduleUber from "./ScheduleUber.js";
import ServiceHistory from "./ServiceHistory.js";
import RealTimeTracking from "./RealTimeTracking.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/schedule-tow-truck" element={<ScheduleTowTruck />} />
        <Route path="/schedule-uber" element={<ScheduleUber />} />
        <Route path="/service-history" element={<ServiceHistory />} />
        <Route path="/real-time-tracking" element={<RealTimeTracking/>} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

