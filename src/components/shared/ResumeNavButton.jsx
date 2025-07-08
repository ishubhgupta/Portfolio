import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { getImagePath } from "../../utils/imagePath";
import "./ResumeNavButton.css";

const ResumeNavButton = ({ isVisible }) => {
  return (
    <div className={`resume-nav-button ${!isVisible ? 'hidden' : ''}`}>
      <a
        href={getImagePath("assets/resume/resume.pdf")}
        className="resume-btn"
        download
        aria-label="Download Resume"
      >
        <FontAwesomeIcon icon={faDownload} />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default ResumeNavButton;
