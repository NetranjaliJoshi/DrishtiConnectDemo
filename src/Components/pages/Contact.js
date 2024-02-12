import React from "react";
import "../css/Contact.css";

export const Contact = () => {
  return (
    <div>
      <div class="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <div class="contact-wrapper">
            <div class="contact-form">
              <h3>Send us a message</h3>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div class="form-group">
                  <textarea name="message" placeholder="Your Message" />
                </div>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div class="contact-info">
              <h3>Connect with us:</h3>
              <p>
                Email: <a href="shivansh@gmail.com">shivansh@gmail.com</a>
              </p>
              <p class="mail-container">
                <a href="rhutuja@gmail.com">rhutuja@gmail.com</a>
              </p>
              <p>Phone : +91 9075575845</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
