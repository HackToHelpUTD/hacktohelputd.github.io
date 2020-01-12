import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  state = {};

  renderSocials = () => {
    return (
      <div className="col-md-3 offset-md-5">
        <div id="footer-socials" className="d-flex justify-content-center">
          <a
            href="https://www.facebook.com/HackToHelpUTD/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square mx-2 fa-3x"></i>
          </a>
          <a
            href="https://www.instagram.com/hacktohelputd/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram mx-2 fa-3x"></i>
          </a>
          <a
            href="https://twitter.com/hacktohelpUTD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter-square mx-2 fa-3x"></i>
          </a>
          <a
            href="https://github.com/HackToHelpUTD"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github-square mx-2 fa-3x"></i>
          </a>
        </div>
      </div>
    );
  };

  renderEmailBar = () => {
    return (
      <div className="col-md-4 offset-sm-0 col-sm-3">
        <div id="email-form ">
          <form
            action="https://hacktohelp.us20.list-manage.com/subscribe/post?u=9d9dde42077a7ca49677e8c3b&amp;id=d559bec18b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="Validate"
            target="_blank"
            rel="noopener noreferrer"
            noValidate
          >
            <input
              className="form-control"
              type="email"
              value=""
              name="EMAIL"
              placeholder="your email address"
            />
            <button
              type="submit"
              className="btn btn-light mb-2 mt-2"
              onclick="submitForm()"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section className="footer-component">
        <div className="footer">
          <div className="container">
            <div className="pt-5"></div>
            <div className="pt-md-5"></div>
            <h5>Sign up for updates</h5>
            <div className="row">
              {this.renderEmailBar()}
              {this.renderSocials()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
