import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import OurFriends from "./components/OurFriends";
import "bootstrap/dist/css/bootstrap.min.css";
import UpcomingEvents from "./components/UpcomingEvents";

function App() {
  return (
    <div className="App">
      <UpcomingEvents />
      <OurFriends />
      <Footer />
    </div>
  );
}

export default App;
