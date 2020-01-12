import React from "react";
import "./App.scss";
import Footer from "./components/Footer";
import OurFriends from "./components/OurFriends";
import "bootstrap/dist/css/bootstrap.min.css";
import UpcomingEvents from "./components/UpcomingEvents";
import HomepageBanner from "./components/HomepageBanner";
import Navbar from "./components/Navbar";
import NavbarSwitch from "./components/NavbarSwitch";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomepageBanner />
      <NavbarSwitch />
      <UpcomingEvents />
      <OurFriends />
      <Footer />
    </div>
  );
}

export default App;
