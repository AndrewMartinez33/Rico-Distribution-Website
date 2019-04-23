import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div>
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
  );
};

export default ContactSection;
