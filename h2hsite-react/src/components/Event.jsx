import React, { Component } from "react";
import "./Event.scss";
import LightLogo from "../imgs/logolight.png";

class Event extends Component {
  state = {};

  cardImageStyle = {
    width: "58px",
    height: "56px"
  };
  cardDescriptionStyle = {
    fontSize: ".9rem"
  };
  renderCardForeground = () => {
    const { name, description, location, time, date } = this.props;
    return (
      <div className="event-card-background rounded p-md-5 p-3">
        <div className="pt-md-1"></div>
        <h2 className="text-center">{name}</h2>
        <p className="text-center" style={this.cardDescriptionStyle}>
          {description}
        </p>
        <span>
          <img
            className="float-right"
            style={this.cardImageStyle}
            src={LightLogo}
            alt="Hack to Help Logo"
          />
        </span>
        <div className="pt-md-4"></div>
        <i className="fas fa-map-marker-alt"></i> {location} - {date} @ {time}
      </div>
    );
  };

  renderCardBackground = () => {
    const { name, description } = this.props;
    return (
      <div className="event-card-content p-3 grayout">
        <h1 style={{ fontSize: "2rem" }} className="description text-center">
          {name}
        </h1>
        <p style={{ fontSize: "1.7rem" }} className="text-center">
          {description}
        </p>
      </div>
    );
  };
  render() {
    return (
      <div
        className="event-card mt-3 mx-2"
        style={{ width: "500px", height: "300px" }}
      >
        <div className="event-card-container">
          {this.renderCardForeground()}
          {this.renderCardBackground()}
        </div>
      </div>
    );
  }
}

export default Event;
