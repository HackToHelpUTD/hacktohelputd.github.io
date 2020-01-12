import React, { Component } from "react";
import "./OurEvents.scss";
import "./About.scss";

class OurEvents extends Component {
  state = {};
  render() {
    return (
      <div
        className="ourevents pb-5 pt-5"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="container">
          <div className="ourevents-backdrop rounded">
            <div className="about-content p-3 shadow-lg">
              <h1 className="about-title text-center text-md-left">
                Our Events
              </h1>
              <p className="about-info">
                Hack to Help started with the goal of creating a safe space for
                everyone to learn programming. We work towards achieving that by
                hosting hands-on workshops several times a semester open to all
                experience levels. Our workshops vary in content ranging from
                basic web development to learning about frameworks such as
                React.
                <br />
                <br />
                <br />
                <br />
                <br />
                {/*<!--To have same size as previous card-->*/}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurEvents;
