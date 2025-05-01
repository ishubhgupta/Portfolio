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
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("home");
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("about");
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("skills");
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("projects");
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById("certificates");
                    if (section) {
                      window.scrollTo({
                        top: section.offsetTop - 50,
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  Certificates
                </a>
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
        <div className="social-links">
          <a
            href="https://github.com/ishubhgupta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/ishubhgupta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/ishubhguptaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://instagram.com/ishubhguptaa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>&copy; {currentYear} Shubh Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
