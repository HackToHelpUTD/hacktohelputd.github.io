import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    const { name, description, download } = this.props;
    return (
      <div
        className="card mx-3 my-3"
        style={{ width: "18rem", height: "12.625rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href={download} className="btn btn-primary">
            Source Code
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
