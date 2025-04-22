import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Shubh Gupta</h3>
          <p>Software Developer & ML Enthusiast</p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/skills">Skills</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/certificates">Certificates</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: shubhorai12@gmail.com</li>
              <li>Location: Bhopal, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">

        <p>&copy; {currentYear} Shubh Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
