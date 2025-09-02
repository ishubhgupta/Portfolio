import { getImagePath } from "../../utils/imagePath";
import "./About.css";

const About = () => {

  // Badges data with placeholder Credly links
  const badges = [
    {
      id: 1,
      name: "AWS Certified AI Practitioner",
      image: getImagePath("assets/badges/aws_certified_ai_practioner.png"),
      credlyUrl: "https://www.credly.com/earner/earned/badge/662058e8-4385-41dd-910b-8142e456c75f", // You can replace this with actual Credly URL later
    },
    {
      id: 2,
      name: "GitHub Foundations",
      image: getImagePath("assets/badges/github_foundation_badge.png"),
      credlyUrl: "https://www.credly.com/earner/earned/badge/35b49368-4758-44e6-8230-bf38b2981427", // You can replace this with actual Credly URL later
    },
  ];

  // Education and experience data
  const timelineItems = [
    {
      id: 1,
      type: "education",
      title: "B.Tech in Computer Science (AIML)",
      organization: "VIT Bhopal University",
      location: "Sehore, MP",
      period: "2022 - 2026",
      // description:
      // "Pursuing Bachelor's degree with specialization in Artificial Intelligence and Machine Learning.",
    },
    {
      id: 2,
      type: "experience",
      title: "Data Analyst Intern",
      organization: "Preprod Corp",
      location: "Bengaluru, India",
      period: "Sep 2024 - Dec 2024",
      // description:
      // "Performed data analysis, built dashboards, and derived insights from complex datasets.",
    },
    {
      id: 3,
      type: "experience",
      title: "Vice President",
      organization: "Software Development Club",
      location: "VIT Bhopal University",
      period: "Dec 2023 - Aug 2024",
      // description:
      // "Led technical workshops, organized coding competitions, and managed a team of student developers.",
    },
    {
      id: 4,
      type: "education",
      title: "Higher Secondary Education (12th)",
      organization: "Suraj Gyan Inter College",
      location: "Konch, UP",
      period: "2020 - 2022",
      // description:
      // "Completed 12th standard with focus on Mathematics, Physics, and Computer Science.",
    },
    {
      id: 5,
      type: "education",
      title: "Secondary Education (10th)",
      organization: "Gurukulum Public School",
      location: "Orai, UP",
      period: "2018 - 2020",
      // description:
      // "Completed 10th standard with strong academic performance across all subjects.",
    },
  ];

  return (
    <section id="about" className="about-section">
      {/* Hidden SEO content */}
      <div className="sr-only">
        <h1>Shubh Gupta - Software Developer and Machine Learning Engineer</h1>
        <p>Professional portfolio showcasing expertise in artificial intelligence, machine learning, Python programming, React development, and software engineering projects. Based in Bhopal, India, VIT Bhopal University Computer Science student.</p>
      </div>
      
      <div className="section-container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              Hello! I'm <span className="highlight">Shubh Gupta</span>
            </h3>
            <p>
              I'm a dedicated Software Developer and Machine Learning enthusiast
              from Bhopal, India. With a solid foundation in computer science, I
              enjoy crafting innovative solutions and tackling challenging
              problems in the tech world.
            </p>
            <p>
              My expertise spans from building responsive web applications to
              implementing machine learning algorithms. I constantly explore new
              technologies and embrace the ethos of lifelong learning to stay at
              the forefront of this rapidly evolving field.
            </p>
            <p>
              Beyond technical skills, I value collaboration and effective
              communication. I thrive in environments where diverse perspectives
              converge, and I'm passionate about creating solutions that make a
              meaningful impact.
            </p>

            <div className="about-info">
              <div className="info-item">
                <h4>Name:</h4>
                <p>Shubh Gupta</p>
              </div>
              <div className="info-item">
                <h4>Email:</h4>
                <p>shubhorai12@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Location:</h4>
                <p>Bhopal, India</p>
              </div>
              <div className="info-item">
                <h4>Availability:</h4>
                <p>Open to opportunities</p>
              </div>
            </div>

            <a
              href={getImagePath("assets/resume/resume.pdf")}
              className="btn-download"
              download
            >
              Download Resume
            </a>

            <div className="badges-section">
              {/* <h4>Certifications & Achievements</h4> */}
              <div className="badges-container">
                {badges.map((badge) => (
                  <a
                    key={badge.id}
                    href={badge.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge-link"
                    title={badge.name}
                  >
                    <img
                      src={badge.image}
                      alt={`Shubh Gupta ${badge.name} - Professional certification badge showcasing expertise in artificial intelligence and machine learning`}
                      className="badge-image"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="about-timeline">
            <div className="timeline-header">
              <div className="timeline-header-left">Education</div>
              <div className="timeline-header-right">Experience</div>
            </div>

            <div className="timeline">
              {timelineItems.map((item) => (
                <div key={item.id} className={`timeline-item ${item.type}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">
                      <span>{item.period}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <h5>{item.organization}</h5>
                    <p className="timeline-location">{item.location}</p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
