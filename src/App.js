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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/schedule-tow-truck" element={<h2>Schedule Tow Truck Page</h2>} />
        <Route path="/schedule-uber" element={<h2>Schedule Uber Page</h2>} />
        <Route path="/service-history" element={<h2>Service History Page</h2>} />
        <Route path="/real-time-tracking" element={<h2>Real-Time Tracking Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

