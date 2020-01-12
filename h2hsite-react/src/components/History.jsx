import React, { Component } from "react";
import "./History.scss";
import "./About.scss";

class History extends Component {
  state = {};
  render() {
    return (
      <div className="history py-5">
        <div className="container">
          <div className="history-backdrop rounded ">
            <div className="about-content p-3 shadow-lg">
              <h1 className="about-title text-center text-md-left">History</h1>
              <p className="about-info">
                Hack to Help was founded by Ata Gowani as ITWD with the purpose
                to provide a safe space for everyone to learn programming. ITWD
                served as a 7-week long hands-on web development course for high
                school students with the first ever class on August 13th, 2017.
              </p>
              <br />
              <p className="about-info">
                In summer 2018, ITWD was renamed to Hack to Help and continued
                on as a programming course for students. The club was initiated
                as a UT Dallas organization in spring 2019 with Jason Smith as
                its advisor and Ata Gowani, Alexis Vu, Jon Washington, and
                Jonathan Harty serving as the core officers. Our team has
                continued to grow since then! Check out our current and past
                team members.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
