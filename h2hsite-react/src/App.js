import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <h1>About Page</h1>
          </Route>
          <Route path="/team">
            <h1>Team Page</h1>
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/join">
            <h1>Join Page</h1>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
