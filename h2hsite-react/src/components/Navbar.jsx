import React, { Component } from "react";
import LogoLight from "../imgs/logolight.png";
import LogoDark from "../imgs/logodark.png";
import "./Navbar.scss";
import $ from "jquery";

class Navbar extends Component {
  state = { light: true };
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    const { light } = this.state;
    const navHeight = $("#hnavBar").height();
    const navBottom = $(window).scrollTop() + navHeight;
    const nSwitchPos = $("#nswitch").offset().top;
    if (navBottom > nSwitchPos) {
      if (light !== false) {
        this.setState({ light: false });
      }
    } else if (light !== true) {
      this.setState({ light: true });
    }
  };
  componentDidMount() {
    this.handleScroll();
  }
  renderLight = () => {
    return (
      <nav
        id="hnavBar"
        className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top pb-5"
      >
        <a className="navbar-brand" href="/">
          <img
            id="navlogo"
            src={LogoLight}
            style={{ width: "25%", height: "25%" }}
            alt="logo"
          />
        </a>
        <button
          id="navToggler"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul className="nav navbar-nav pr-3">
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="about">
                About
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="team">
                Team
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="events">
                Events
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="join">
                Join
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" id="contactLink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  renderDark = () => {
    return (
      <nav
        id="hnavBar"
        className="navbar navbar-expand-lg navbar-light fixed-top bg-white shadow-sm"
      >
        <a className="navbar-brand" href="/">
          <img
            id="navlogo"
            src={LogoDark}
            style={{ width: "25%", height: "25%" }}
            alt="logo"
          />
        </a>
        <button
          id="navToggler"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul className="nav navbar-nav pr-3">
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="about">
                About
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="team">
                Team
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="events">
                Events
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" href="join">
                Join
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-right" id="contactLink" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  render() {
    const { light } = this.state;
    if (light) return <React.Fragment>{this.renderLight()}</React.Fragment>;
    else
      return (
        <React.Fragment>
          {this.renderDark()}
          <div className="pb-5"></div>
          <div className="pb-5"></div>
        </React.Fragment>
      );
  }
}

export default Navbar;
