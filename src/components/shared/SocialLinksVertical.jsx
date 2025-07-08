import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialLinksVertical.css";

const SocialLinksVertical = ({ isVisible }) => {
  return (
    <div className={`social-links-vertical ${!isVisible ? 'hidden' : ''}`}>
      <div className="social-links-container">
        <a
          href="https://github.com/ishubhgupta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="social-link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/ishubhgupta"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/ishubhguptaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="social-link"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        {/* <a
          href="https://instagram.com/ishubhguptaa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="social-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a> */}
      </div>
      <div className="social-line"></div>
    </div>
  );
};

export default SocialLinksVertical;
