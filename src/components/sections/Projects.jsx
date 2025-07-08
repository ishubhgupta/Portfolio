import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { getImagePath } from "../../utils/imagePath";
import "./Projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleRows, setVisibleRows] = useState(2); // Show 2 rows initially
  const projectsPerRow = 3; // 3 projects per row

  const projects = [
    {
      id: 1,
      title: "Arogyam - Health Care Platform",
      description:
        "A comprehensive health care platform combining intelligent chatbot technology with ML models for disease prediction, health consultations, and personalized recommendations.",
      image: getImagePath("assets/images/arogyam_healthcare.png"),
      category: ["all", "web", "ml"],
      technologies: ["React", "Flask", "Python", "ML", "scikit-learn", "pandas"],
      github: "https://github.com/ishubhgupta/arogyam",
      // demo: "https://arogyam.demo.com",
      video: null,
    },
    {
      id: 2,
      title: "Energy Insight",
      description:
        "A dashboard for monitoring and analyzing energy consumption patterns to optimize efficiency and reduce costs.",
      image: getImagePath("assets/images/energy-insight.png"),
      category: ["all", "web", "ml"],
      technologies: ["React", "D3.js", "Python", "TensorFlow", "AWS"],
      github: "https://github.com/ishubhgupta/energy-insight",
      // demo: "https://energy-insight.demo.com",
      video: null,
    },
    {
      id: 3,
      title: "V-Rides",
      description:
        "A ride-sharing application that connects travelers going in the same direction, reducing carbon footprint and travel costs.",
      image: getImagePath("assets/images/v-rides.jpg"),
      category: ["all", "web"],
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"],
      github: "https://github.com/ishubhgupta/v-rides",
      demo: null,
      // video: "https://youtube.com/watch?v=example",
    },
    {
      id: 4,
      title: "ResQMap",
      description:
        "A comprehensive design system that provides consistent UI components and design guidelines for building seamless user experiences.",
      image: getImagePath("assets/images/sahej-dsn.png"),
      category: ["all", "web"],
      technologies: ["React", "Storybook", "SCSS", "Jest", "Figma"],
      github: "https://github.com/ishubhgupta/ResQMap",
      // demo: "https://resqmap.demo.com",
      video: null,
    },
    {
      id: 5,
      title: "Review Insight",
      description:
        "An AI-powered platform that analyzes customer reviews and provides actionable insights for businesses to improve their products and services.",
      image: getImagePath("assets/images/review-insights.png"),
      category: ["all", "web", "ml"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "NLP"],
      github: "https://github.com/ishubhgupta/review-insight",
      demo: "https://review-insight.streamlit.app/",
      video: null,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js and Vite to showcase my skills and projects.",
      image: getImagePath("assets/images/portfolio.png"),
      category: ["all", "web"],
      technologies: [
        "React",
        "Vite",
        "CSS3",
        "Font Awesome",
        "Responsive Design",
      ],
      github: "https://github.com/ishubhgupta/portfolio",
      demo: "https://ishubhgupta.github.io/Portfolio/",
      video: null,
    },
    {
      id: 7,
      title: "Sort & Filter Component",
      description:
        "A customizable sorting and filtering component library for React applications, helping developers create better user experiences.",
      image: getImagePath("assets/images/sort-and-filter.png"),
      category: ["all", "web"],
      technologies: ["React", "TypeScript", "CSS Modules", "Webpack"],
      github: "https://github.com/ishubhgupta/sort-and-filter",
      demo: "https://sortfilter.vercel.com",
      video: null,
    },
    {
      id: 8,
      title: "InkSpace - Blog Platform",
      description:
        "A modern blog platform built with Next.js, TypeScript, and Supabase featuring rich text editing, comment system, and role-based access control.",
      image: getImagePath("assets/images/inkspace-blog.png"),
      category: ["all", "web"],
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "AWS S3"],
      github: "https://github.com/ishubhgupta/inkspace",
      demo: "https://inkspace.netlify.app",
      video: null,
    },
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setVisibleRows(2); // Reset to 2 rows when filter changes
  };

  const filteredProjects = projects.filter((project) =>
    project.category.includes(activeFilter)
  );

  const totalRows = Math.ceil(filteredProjects.length / projectsPerRow);
  const visibleProjects = filteredProjects.slice(0, visibleRows * projectsPerRow);
  const hasMoreProjects = visibleRows < totalRows;

  const handleViewMore = () => {
    setVisibleRows(prev => prev + 1);
  };

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
          {visibleProjects.map((project) => (
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

        {hasMoreProjects && (
          <div className="view-more-container">
            <button 
              className="view-more-btn"
              onClick={handleViewMore}
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
