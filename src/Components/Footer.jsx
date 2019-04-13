import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container centered-column">
      <div className="centered-row footer-margin">
        <div className="footer-box-left centered-column">
          <div className="centered-column footer-box">
            <div className="footer-title">Mission Statement</div>
            <div className="footer-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              accusantium repellendus quam quisquam velit officiis cupiditate
              tempora delectus voluptatem, laborum quia dolores ipsum debitis id
              inventore necessitatibus distinctio neque. Aut?
            </div>
          </div>
        </div>
        <div className="footer-box-right centered-column">
          <div className="centered-column footer-box">
            <h2 className="footer-title">Subscribe to Our Newsletter</h2>
            <form
              className="footer-inputs-container"
              action="formspree email action"
              method="POST"
            >
              <div className="centered-row footer-inputs-container">
                <input
                  className="footer-form-inputs"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                />
                <input
                  className="footer-form-inputs"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="_replyto"
                  required
                />
              </div>
              <input
                className="btn btn-danger footer-submit"
                id="contact-submit"
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="footer-trademark">
        2019 Rico Distribution<sup>&reg;</sup>, a Kangen Water<sup>&reg; </sup>
        Distributor. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
