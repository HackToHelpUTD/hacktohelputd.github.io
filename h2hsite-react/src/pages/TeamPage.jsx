import React, { Component } from "react";
import NavbarSwitch from "../components/NavbarSwitch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class TeamPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavbarSwitch />
        <Navbar />
        <Footer />
      </React.Fragment>
    );
  }
}

export default TeamPage;
