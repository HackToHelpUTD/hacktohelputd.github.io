import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
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
            <h1>Events Page</h1>
          </Route>
          <Route path="/join">
            <h1>Join Page</h1>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
