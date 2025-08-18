import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h4>📚Pustak Ghar</h4>
          <p>An open knowledge-sharing platform for students.</p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/subjects">Subjects</a>
            </li>
            <li>
              <a href="/more">More</a>
            </li>
            <li>
              <a href="/joinus">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <h5>Connect</h5>
          <a href="#">Twitter</a>
          <a href="#">Github</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear} Pustak Ghar | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
