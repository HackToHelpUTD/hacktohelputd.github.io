import React, { Component } from "react";

class Officer extends Component {
  state = {};
  render() {
    const { firstName, lastName, role } = this.props;
    return (
      <div className="card mx-2 my-3">
        <img
          class="card-img-top officer-headshot"
          src="./src/imgs/officer_headshots/current/ata.jpg"
          alt={firstName + " " + lastName}
        />
        <div class="card-body">
          <h6 class="officer-title" style="font-size:.9em;">
            {firstName}
            <br />
            {lastName}
          </h6>
          <p className="officer-description">{role}</p>
        </div>
      </div>
    );
  }
}

export default Officer;
