import React, { Component } from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import Navbar from "../components/Navbar";
import NavbarSwitch from "../components/NavbarSwitch";
import Footer from "../components/Footer";
import SourceCode from "../components/SourceCode";

class EventsPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarSwitch />
        <Navbar />
        <UpcomingEvents />
        <SourceCode />
        <Footer />
      </React.Fragment>
    );
  }
}

export default EventsPage;
