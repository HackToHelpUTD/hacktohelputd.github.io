import React, { Component } from "react";
import Events from "./Events";

class UpcomingEvents extends Component {
  state = {};

  render() {
    return (
      <section className="upcomingevents-component">
        <div id="upcoming-events-section">
          <div className="container">
            <h1>Upcoming Events</h1>
            <Events />
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
