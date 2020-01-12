import React from "react";
import NavbarSwitch from "../components/NavbarSwitch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import History from "../components/History";
import OurEvents from "../components/OurEvents";

const AboutPage = () => {
  return (
    <React.Fragment>
      <NavbarSwitch />
      <Navbar />
      <History />
      <OurEvents />
      <Footer />
    </React.Fragment>
  );
};

export default AboutPage;
