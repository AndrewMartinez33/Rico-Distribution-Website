import React from "react";
import { Link } from "react-router-dom";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div>
      <div className="centered-column contact-form-container">
        <div className="contact-form-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-text">
            If you have any question or you are ready to start a free trial,
            book an in-home demo, or order your Kangen Water ® machine, I am
            here to help guide your through the process.
          </p>
          <p className="contact-text">Or give us a call: (555) 555-0000</p>
        </div>
      </div>
      <form
        className="centered-column contact-form-container"
        action="formspree email action"
        method="POST"
      >
        <input
          className="contact-form-inputs"
          id="name"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="contact-form-inputs"
          id="email"
          type="email"
          placeholder="Email"
          name="_replyto"
          required
        />
        <input
          className="contact-form-inputs"
          id="subject"
          type="text"
          placeholder="Subject"
          name="subject"
        />
        <textarea
          className="contact-form-inputs"
          id="message"
          type="text"
          placeholder="Message"
          name="message"
          required
        />
        <div className="contact-button-container">
          <input
            className="btn btn-danger"
            id="contact-submit"
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
