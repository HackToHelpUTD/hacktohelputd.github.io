import React, { Component } from "react";
import { init, getAllEvents, getEvent } from "../scripts/Models/Events";

class Events extends Component {
  state = { loading: true, events: [] };
  spinnerStyle = {
    width: "3rem",
    height: "3rem",
    marginTop: "100px",
    marginBottom: "100px"
  };
  constructor(props) {
    super(props);
    init(this.doneLoading);
  }
  doneLoading = () => {
    let events = getAllEvents();
    this.setState({ loading: false, events: events });
  };

  renderLoading = () => {
    return (
      <div className="text-center" id="events-loading">
        <div className="spinner-border" style={this.spinnerStyle} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  renderNoEvents = () => {
    return (
      <div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <h1 className="text-center">Coming Soon</h1>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
        <div className="pt-5"></div>
      </div>
    );
  };
  render() {
    const { loading, events } = this.state;
    if (loading) {
      return <React.Fragment>{this.renderLoading()}</React.Fragment>;
    } else {
      if (events.length > 0) return <h1>Hi</h1>;
      else {
        return <React.Fragment>{this.renderNoEvents()}</React.Fragment>;
      }
    }
  }
}

export default Events;
