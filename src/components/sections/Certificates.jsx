import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Applied Machine Learning In Python",
      issuer: "Coursera",
      date: "Issued Jan 2024",
      image: "/assets/Certificates/certi-1-coursera-applied-ml.jpg",
      tags: ["Machine Learning", "Python"],
    },
    {
      id: 2,
      title: "Buildathon 2024",
      issuer: "Preprod Corp",
      date: "Issued Aug 2024",
      image: "/assets/Certificates/certi-2-buildathon.png",
      tags: ["Python", "MLops", "Docker"],
    },
    {
      id: 3,
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      date: "Issued Jan 2023",
      image: "/assets/Certificates/certi-3-kaggle-1.png",
      tags: ["Machine Learning", "Python"],
    },
    {
      id: 4,
      title: "Introduction to Deep Learning",
      issuer: "Kaggle",
      date: "Issued Feb 2023",
      image: "/assets/Certificates/certi-4-kaggle-2.png",
      tags: ["Deep Learning", "Python"],
    },
    {
      id: 5,
      title: "Introduction to Machine Learning",
      issuer: "Coursera",
      date: "Issued Mar 2024",
      image: "/assets/Certificates/certi-5-kaggle-3.png",
      tags: ["Python", "Machine Learning"],
    },
    {
      id: 6,
      title: "Matlab onramp",
      issuer: "Mathworks",
      date: "Issued Sept 2022",
      image: "/assets/Certificates/certi-6-mathworks-onramp.jpg",
      tags: ["MATLAB"],
    },
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        <div className="section-title">
          <h2>Certifications</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Professional certifications and achievements
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>
              <div className="certificate-image">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />
                <div className="certificate-overlay">
                  <a
                    href={certificate.image}
                    className="view-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faExpand} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p className="issuer">{certificate.issuer}</p>
                <p className="issue-date">{certificate.date}</p>
                <div className="certificate-tags">
                  {certificate.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
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

export default Certificates;
