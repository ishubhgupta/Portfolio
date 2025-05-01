import { useEffect, useRef, useState } from "react";
import { getImagePath } from "../../utils/imagePath";
import "./About.css";

const About = () => {
  const skillsCubeRef = useRef(null);
  const sceneRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);

  // Auto-rotation effect
  useEffect(() => {
    let animationId;
    let angle = 0;

    const rotate = () => {
      if (autoRotate && !isDragging) {
        angle += 0.3; // Reduced rotation speed for smoother animation
        setRotation((prev) => ({
          x: prev.x,
          y: angle,
        }));
      }
      animationId = requestAnimationFrame(rotate);
    };

    rotate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [autoRotate, isDragging]);

  // Apply rotation to the cube
  useEffect(() => {
    if (!skillsCubeRef.current) return;

    skillsCubeRef.current.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
  }, [rotation]);

  // Mouse and touch event handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    setStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setAutoRotate(false);
      setStartPosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const sensitivity = 0.5;
    const deltaX = (e.clientX - startPosition.x) * sensitivity;
    const deltaY = (e.clientY - startPosition.y) * sensitivity;

    setRotation((prev) => ({
      x: prev.x - deltaY,
      y: prev.y + deltaX,
    }));

    setStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;

    const sensitivity = 0.5;
    const deltaX = (e.touches[0].clientX - startPosition.x) * sensitivity;
    const deltaY = (e.touches[0].clientY - startPosition.y) * sensitivity;

    setRotation((prev) => ({
      x: prev.x - deltaY,
      y: prev.y + deltaX,
    }));

    setStartPosition({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    // Prevent page scrolling while dragging
    e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      // Optional: restart auto-rotation when mouse leaves
      // setAutoRotate(true);
    }
  };

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

  // Skills to display on the cube faces
  const skillsFaces = [
    { face: "front", skills: ["JavaScript", "React", "Node.js"] },
    { face: "back", skills: ["Python", "TensorFlow", "OpenCV"] },
    { face: "right", skills: ["HTML/CSS", "SASS", "Tailwind"] },
    { face: "left", skills: ["MongoDB", "SQL", "Firebase"] },
    { face: "top", skills: ["Git", "Docker", "AWS"] },
    { face: "bottom", skills: ["TypeScript", "Redux", "Express"] },
  ];

  return (
    <section id="about" className="about-section">
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
              href={getImagePath("assets/resume/Shubh_Gupta_SDE_Resume.pdf")}
              className="btn-download"
              download
            >
              Download Resume
            </a>
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
