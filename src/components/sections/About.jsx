import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src={import.meta.env.BASE_URL + "assets/images/shubhImage2.png"}
                alt="Shubh Gupta"
              />
            </div>
          </div>

          <div className="about-text">
            <h3>
              Hello! I'm <span className="highlight">Shubh Gupta</span>
            </h3>
            <p>
              I'm a passionate Software Developer and Machine Learning
              enthusiast based in Bhopal, India. With a strong foundation in
              computer science and a keen interest in solving complex problems,
              I strive to create efficient and innovative solutions.
            </p>
            <p>
              My journey in tech has equipped me with a diverse skill set, from
              building robust web applications to implementing machine learning
              models. I enjoy learning new technologies and continuously
              improving my craft to deliver solutions that make a difference.
            </p>

            <div className="about-info">
              <div className="info-item">
                <h4>Name:</h4>
                <p>Shubh Gupta</p>
              </div>
              <div className="info-item">
                <h4>Email:</h4>
                <p>contact@shubhorai12@gmail.com</p>
              </div>
              <div className="info-item">
                <h4>Location:</h4>
                <p>Bhopal, India</p>
              </div>
              <div className="info-item">
                <h4>Education:</h4>
                <p>B.Tech in Computer Science (AIML)</p>
              </div>
            </div>

            <a
              href={
                import.meta.env.BASE_URL +
                "assets/resume/Shubh_Gupta_SDE_Resume.pdf"
              }
              className="btn-download"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
