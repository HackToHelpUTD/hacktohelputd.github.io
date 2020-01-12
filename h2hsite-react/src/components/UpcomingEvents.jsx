import React, { Component } from "react";
import Events from "./Events";

class UpcomingEvents extends Component {
  state = {};

  render() {
    return (
      <section className="upcomingevents-component py-3">
        <div id="upcoming-events-section">
          <div className="container">
            <h1 className="large-title">Upcoming Events</h1>
            <div className="d-flex align-items-center justify-content-start flex-wrap">
              <Events />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
