import React, { Component } from "react";
import pivotalLogo from "../imgs/ourfriends/pivotal_logo.png";
import UXLogo from "../imgs/ourfriends/ux_logo.png";
import WITBLogo from "../imgs/ourfriends/witb_logo.png";
import "./OurFriends.scss";

class OurFriends extends Component {
  state = {};

  renderLogos = () => {
    return (
      <React.Fragment>
        <a
          href="https://uxutd.com/"
          target="_blank"
          className="mx-md-5"
          rel="noopener noreferrer"
        >
          <img
            src={UXLogo}
            className="my-3 our-friends-picture"
            alt="UX Club"
          />
        </a>
        <a
          href="https://pivotal.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-md-5"
        >
          <img
            src={pivotalLogo}
            className="my-3 our-friends-picture"
            alt="Pivotal"
          />
        </a>
        <a
          href="https://witb-utd.wixsite.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-md-5"
        >
          <img
            src={WITBLogo}
            className="my-3 our-friends-picture"
            alt="Women in Technoloy and Business"
          />
        </a>
      </React.Fragment>
    );
  };
  render() {
    return (
      <section className="our-friends-section pt-5">
        <div className="container">
          <h1 className="large-title text-left pb-5 ">Our Friends</h1>
          <div id="our-friends" className="text-center pb-5 ">
            {this.renderLogos()}
          </div>
        </div>
      </section>
    );
  }
}

export default OurFriends;
