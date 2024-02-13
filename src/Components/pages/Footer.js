import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Drishti</span>Connect
              </h3>
            </div>

            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Connect us on</h5>

              <div className="footer-icons">
                <p>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-linkedin"></i>
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Information</h5>
              <p>
                <i class="fa-solid fa-envelope"></i>{" "}
                <a href="rhutujamulik98@gmail.com" class="linkColor">
                  rhutujam@gmail.com
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i> +91 9075575845
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <div className="Last-footer bg-primary">
        <p>
          @{new Date().getFullYear()}{" "}
          <a class="text-body" href="https://mdbootstrap.com/">
            DrishtiConnect.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
