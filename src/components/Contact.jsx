import React from "react";
import "../styling/Contact.css";

function Contact() {
  return (
    <div className="wrapper">
      <div className="container-form">
        <div className="title">
          <h2>Contact Us</h2>
        </div>
        <form className="form" action="/form/submit" method="POST">
          <label htmlFor="name">Full Name*</label>
          {/* <input type="email" required /> */}
          <input className="form-input" type="text" name="name" id="name" required/>
          <label htmlFor="email">Email*</label>
          <input className="form-input" type="email" name="email" id="email" />
          <label htmlFor="email">Phone Number*</label>
          <input className="form-input" type="phone" name="phone" id="phone" />
          <label>Message*</label>
          <textarea className="form-textarea" type="text"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

