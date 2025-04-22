import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faLaptopCode,
  faMobile,
  faServer,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: faLaptopCode,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 82 },
        { name: "TypeScript", level: 75 },
        { name: "Bootstrap", level: 80 },
      ],
    },
    backend: {
      icon: faServer,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 78 },
        { name: "Python", level: 85 },
        { name: "Django", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    database: {
      icon: faDatabase,
      title: "Database",
      skills: [
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 70 },
        { name: "Redis", level: 60 },
      ],
    },
    programming: {
      icon: faCode,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 88 },
        { name: "Python", level: 85 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 },
        { name: "TypeScript", level: 75 },
      ],
    },
    tools: {
      icon: faTools,
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Jenkins", level: 60 },
        { name: "CI/CD", level: 75 },
      ],
    },

  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-title">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-tabs">
          {Object.keys(skillCategories).map((category) => (
            <div
              key={category}
              className={`tab ${activeTab === category ? "active" : ""}`}
              onClick={() => setActiveTab(category)}
            >
              <FontAwesomeIcon icon={skillCategories[category].icon} />
              <span>{skillCategories[category].title}</span>
            </div>
          ))}
        </div>

        <div className="skills-content">
          <div className="skills-group">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
