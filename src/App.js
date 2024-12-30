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
import React from 'react';
import './App.css';
import RegistrationForm from './RegistrationForm.js';
import MainPage from './MainPage.js';
import ScheduleTowTruck from './ScheduleTowTruck.js';
import ScheduleUber from './ScheduleUber.js';
import ServiceHistory from './ServiceHistory.js';
import RealTimeTracking from './RealTimeTracking.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/main" component={MainPage} />
          <Route path="/schedule-tow-truck" component={ScheduleTowTruck} />
          <Route path="/schedule-uber" component={ScheduleUber} />
          <Route path="/service-history" component={ServiceHistory} />
          <Route path="/real-time-tracking" component={RealTimeTracking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
