import React, { Component } from "react";
import "./HomepageBanner.scss";
class HomepageBanner extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="backdrop" className="officer-backdrop background-tint">
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div className="pt-5"></div>
          <div id="splashtext" className="text-white pt-5">
            <h1 className="title text-center">Hack to Help</h1>
            <div className="pt-1"></div>
            <div className="d-flex justify-content-center ">
              <p id="slogan" className="description text-center">
                Debunking the myth of "The Genius Programmer" and promoting
                social good in the process.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomepageBanner;
