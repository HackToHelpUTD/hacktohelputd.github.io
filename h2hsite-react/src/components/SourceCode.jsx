import React, { Component } from "react";
import "./SourceCode.scss";
import Projects from "./Projects";

class SourceCode extends Component {
  state = {};
  render() {
    return (
      <div id="source-code-section" className="mt-3 py-3">
        <div className="container">
          <h1 className="large-title">Available Source Code</h1>
          <div
            className="d-flex align-items-center justify-content-start flex-wrap"
            id="source-code-loading-area"
          >
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default SourceCode;
