import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const typingIntervalRef = useRef(null);
  const updateIntervalRef = useRef(null);
  const lastIndexRef = useRef(-1);
  const [activeSection, setActiveSection] = useState("home");

  const professions = [
    "Software Developer.",
    "ML Enthusiast.",
    "Problem Solver.",
    "Tech Explorer.",
  ];

  useEffect(() => {
    // Function to clear intervals
    function clearIntervals() {
      clearTimeout(typingIntervalRef.current);
      clearTimeout(updateIntervalRef.current);
    }

    // Main function to update profession
    function updateProfession() {
      clearIntervals();

      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * professions.length);
      } while (randomIndex === lastIndexRef.current);

      lastIndexRef.current = randomIndex;
      let randomProfession = professions[randomIndex];

      // Reset text and immediately set first character
      const firstChar = randomProfession.charAt(0);
      setDisplayText(firstChar);

      let charIndex = 1; // Start from the second character

      // Inner function for typewriter effect
      function typeWriter() {
        if (charIndex < randomProfession.length) {
          setDisplayText(randomProfession.substring(0, charIndex + 1));
          charIndex++;
          typingIntervalRef.current = setTimeout(typeWriter, 100);
        } else {
          updateIntervalRef.current = setTimeout(updateProfession, 2000);
        }
      }

      // Start the typewriter effect after a short delay to ensure first char is rendered
      typingIntervalRef.current = setTimeout(typeWriter, 100);
    }

    // Add section tracking logic
    const handleScroll = () => {
      const sections = ["home", "about"];
      const currentPosition = window.scrollY;

      // Get heights of sections
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");

      if (!homeSection || !aboutSection) return;

      // Calculate the end of the about section
      const aboutSectionBottom =
        aboutSection.offsetTop + aboutSection.offsetHeight;

      // If we're within home or about section, hide the social links
      if (currentPosition < aboutSectionBottom) {
        setActiveSection("hidden");
      } else {
        setActiveSection("visible");
      }
    };

    // Initial check when component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    // Start the typing effect when component mounts
    updateProfession();

    // Clean up timeouts when component unmounts
    return () => {
      clearIntervals();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run only on mount

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h3>Hello, I'm</h3>
          <h1>Shubh Gupta</h1>
          <h2>
            I'm a <span className="typed-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p>
            Passionate about building innovative solutions and exploring new
            technologies. Let's turn ideas into reality!
          </p>
          <div className="home-buttons">
            <a
              href="#contact"
              className="primary-btn"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 50,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Get In Touch
            </a>
            <a
              href={
                import.meta.env.BASE_URL +
                "assets/resume/Shubh_Gupta_SDE_Resume.pdf"
              }
              className="secondary-btn"
              download
            >
              Download CV
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/ishubhgupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/ishubhgupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-container">
            <img
              src={import.meta.env.BASE_URL + "assets/images/shubhImage6.png"}
              alt="Shubh Gupta"
            />
          </div>
        </div>
      </div>
      <div
        className={`social-links-vertical ${
          activeSection === "hidden" ? "hidden" : ""
        }`}
      >
        <a
          href="https://github.com/ishubhgupta"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/ishubhgupta"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/ishubhguptaa"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter Profile"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <div className="social-line"></div>
      </div>
      <div className="scroll-down" onClick={scrollToNextSection}>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </section>
  );
};

export default Home;
