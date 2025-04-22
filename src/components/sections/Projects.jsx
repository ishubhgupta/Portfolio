import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Review Insights",
      description:
        "An AI-powered platform that analyzes customer reviews and provides actionable insights for businesses to improve their products and services.",
      image: "/assets/images/review-insights.png",
      category: ["all", "web", "ml"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "NLP"],
      github: "https://github.com/yourusername/review-insights",
      demo: "https://review-insights.demo.com",
      video: null,
    },
    {
      id: 2,
      title: "Energy Insight",
      description:
        "A dashboard for monitoring and analyzing energy consumption patterns to optimize efficiency and reduce costs.",
      image: "/assets/images/energy-insight.png",
      category: ["all", "web", "ml"],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "AWS"],
      github: "https://github.com/yourusername/energy-insight",
      demo: "https://energy-insight.demo.com",
      video: null,
    },
    {
      id: 3,
      title: "V-Rides",
      description:
        "A ride-sharing application that connects travelers going in the same direction, reducing carbon footprint and travel costs.",
      image: "/assets/images/v-rides.jpg",
      category: ["all", "mobile"],
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"],
      github: "https://github.com/yourusername/v-rides",
      demo: null,
      video: "https://youtube.com/watch?v=example",
    },
    {
      id: 4,
      title: "Sort & Filter",
      description:
        "A customizable sorting and filtering component library for React applications, helping developers create better user experiences.",
      image: "/assets/images/sort-and-filter.png",
      category: ["all", "web"],
      technologies: ["React", "TypeScript", "CSS Modules", "Webpack"],
      github: "https://github.com/yourusername/sort-and-filter",
      demo: "https://sortfilter.demo.com",
      video: null,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js and Vite to showcase my skills and projects.",
      image: "/assets/images/portfolio.png",
      category: ["all", "web"],
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "Font Awesome",
        "Responsive Design",
      ],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://shubhgupta.dev",
      video: null,
    },
    {
      id: 6,
      title: "SAHEJ Design System",
      description:
        "A comprehensive design system that provides consistent UI components and design guidelines for building seamless user experiences.",
      image: "/assets/images/sahej-dsn.png",
      category: ["all", "web"],
      technologies: ["React", "Storybook", "SCSS", "Jest", "Figma"],
      github: "https://github.com/yourusername/sahej-design-system",
      demo: "https://sahej.design",
      video: null,
    },
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-title">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="project-filters">
          <button
            className={activeFilter === "all" ? "active" : ""}
            onClick={() => handleFilterClick("all")}
          >
            All
          </button>
          <button
            className={activeFilter === "web" ? "active" : ""}
            onClick={() => handleFilterClick("web")}
          >
            Web Apps
          </button>
          <button
            className={activeFilter === "mobile" ? "active" : ""}
            onClick={() => handleFilterClick("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={activeFilter === "ml" ? "active" : ""}
            onClick={() => handleFilterClick("ml")}
          >
            ML / AI
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
