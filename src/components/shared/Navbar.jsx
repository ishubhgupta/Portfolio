import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { getImagePath } from "../../utils/imagePath";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for navbar background
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "research",
        "certificates",
        "contact",
      ];
      const sectionElements = sections.map((id) => document.getElementById(id));

      const currentPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
    closeMenu();
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav>
        <div className="name-header">Shubh Gupta</div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills");
            }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#research"
            className={activeSection === "research" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("research");
            }}
          >
            Research
          </a>
          <a
            href="#certificates"
            className={activeSection === "certificates" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("certificates");
            }}
          >
            Certificates
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Connect
          </a>
        </div>
        <a
          href={getImagePath("assets/resume/Shubh_Gupta_SDE_Resume.pdf")}
          className={`header-resume-btn ${isOpen ? "hidden" : ""} ${
            activeSection === "home" || activeSection === "about"
              ? "hidden"
              : ""
          }`}
          download
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
