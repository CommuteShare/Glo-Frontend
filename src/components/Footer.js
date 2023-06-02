import React from "react";
import FacebookLogo from "../assets/FacebookLogo.svg";
import LinkedInLogo from "../assets/LinkedInLogo.svg";
import TwitterLogo from "../assets/TwitterLogo.svg";
import InstagramLogo from "../assets/InstagramLogo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container0">
        <div className="footer-links0">
          <div className="footer-col0">
            <h1>
              Commute<span>S</span>hare
            </h1>
            <ul>
              <li>
                <a href="#">Overview</a>
              </li>

              <li>
                <a href="#">Features</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">Help</a>
              </li>

              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>

            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
            <p>&copy; 2023 CommuteShare. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-links">
          <div className="footer-col  ">
            <h2>CommuteShare</h2>
            <p>
              We offer exclusive ride services tailored
              <br />
              specifically for working class individuals
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#">Ride Sharing Service</a>
              </li>
              <li>
                <a href="#">Mobile Application</a>
              </li>
              <li>
                <a href="#">Driver Partnership</a>
              </li>
              <li>
                <a href="#">Payment Processing</a>
              </li>
              <li>
                <a href="#">Platform Insfastructure</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          <div className="footer-col ">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="footer-links2">
          <div className="footer-col2">
            <h1>
              Commute<span>S</span>hare
            </h1>
            <p>&copy; 2023 CommuteShare. All rights reserved. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
