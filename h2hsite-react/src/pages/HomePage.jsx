import React, { Component } from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import HomepageBanner from "../components/HomepageBanner";
import Navbar from "../components/Navbar";
import NavbarSwitch from "../components/NavbarSwitch";
import Footer from "../components/Footer";
import OurFriends from "../components/OurFriends";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <HomepageBanner />
        <NavbarSwitch />
        <UpcomingEvents />
        <OurFriends />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
