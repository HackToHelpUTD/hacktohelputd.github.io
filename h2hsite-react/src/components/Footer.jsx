import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section class="footer">
        <div class="container ">
          <div class="pt-5"></div>
          <div class="pt-md-5"></div>
          <h5>Sign up for updates</h5>
          <div class="row ">
            <div class="col-md-4 offset-sm-0 col-sm-3">
              <div id="email-form ">
                <form
                  action="https://hacktohelp.us20.list-manage.com/subscribe/post?u=9d9dde42077a7ca49677e8c3b&amp;id=d559bec18b"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate"
                  target="_blank"
                  novalidate
                >
                  <input
                    class="form-control"
                    type="email"
                    value=""
                    name="EMAIL"
                    placeholder="your email address"
                  />
                  <button
                    type="submit"
                    class="btn btn-light mb-2 mt-2"
                    onclick="submitForm()"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div class="col-md-3 offset-md-5">
              <div id="footer-socials" class="d-flex justify-content-center">
                <a
                  href="https://www.facebook.com/HackToHelpUTD/"
                  target="_blank"
                >
                  <i class="fab fa-facebook-square mx-2 fa-3x"></i>
                </a>
                <a
                  href="https://www.instagram.com/hacktohelputd/"
                  target="_blank"
                >
                  <i class="fab fa-instagram mx-2 fa-3x"></i>
                </a>
                <a href="https://twitter.com/hacktohelpUTD" target="_blank">
                  <i class="fab fa-twitter-square mx-2 fa-3x"></i>
                </a>
                <a href="https://github.com/HackToHelpUTD" target="_blank">
                  <i class="fab fa-github-square mx-2 fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;