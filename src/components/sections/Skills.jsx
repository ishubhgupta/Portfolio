import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faCloud,
  faCode,
  faRobot,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("ml");

  const skillCategories = {
    programming: {
      icon: faCode,
      title: "Programming",
      skills: [
        "Python",
        "C++",
        "Java",
        "React",
        "Node.js"
      ],
    },
    ml: {
      icon: faBrain,
      title: "Machine Learning",
      skills: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
        "Matplotlib",
      ],
    },
    mlops: {
      icon: faCogs,
      title: "MLOps & DevOps",
      skills: [
        "Docker",
        "MLflow",
        "Git",
        "Model Monitoring",
      ],
    },
    cloud: {
      icon: faCloud,
      title: "Cloud & AWS",
      skills: [
        "AWS SageMaker",
        "AWS Lambda",
        "AWS S3",
        "AWS EC2",
        "AWS RDS",
        "API Gateway",
        "CloudWatch",
        "IAM",
      ],
    },

    data: {
      icon: faRobot,
      title: "Data & Analytics",
      skills: [
        "Data Analysis",
        "Statistical Modeling",
        "Feature Engineering",
        "Data Visualization",
        "ETL Pipelines",
      ],
    },
  };

  return (
    <section id="skills" className="skills-section">
      {/* Hidden SEO content */}
      <div className="sr-only">
        <h1>Shubh Gupta Technical Skills and Expertise</h1>
        <p>Comprehensive technical skills in Machine Learning (TensorFlow, PyTorch, Scikit-learn), Programming (Python, C++, Java, React, Node.js), MLOps & DevOps (Docker, MLflow, Git), Cloud Technologies (AWS, Google Cloud), and Data Analytics (Pandas, NumPy, Matplotlib, Power BI).</p>
      </div>
      
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
          <div className="skills-grid">
            {skillCategories[activeTab].skills.map((skill, index) => (
              <div className="skill-tag" key={index}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
