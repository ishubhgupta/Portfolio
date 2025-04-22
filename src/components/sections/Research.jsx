import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./Research.css";

const Research = () => {
  const papers = [
    {
      id: 1,
      title:
        "Exploring EEG Characteristics with Machine Learning Classifiers for Accurate Detection of Eye Blink Mistakes",
      date: "Published: 2024",
      publisher: "Taylor & Francis",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003457176-6/exploring-eeg-characteristics-machine-learning-classifiers-accurate-detection-eye-blink-mistakes-shubh-gupta-divya-thakur-akshat-rastogi-rupal-mishra-sandeep-balabantaray-meet-bikhani",
      description:
        "This paper presents a framework for accurately predicting eye movements using EEG data and machine learning classifiers. We tested various algorithms including Decision Tree, AdaBoost, and Random Forest, achieving up to 96% accuracy with Random Forest. I, Shubh Gupta, as the main author, contributed to the machine learning implementation and the writing of the paper, with support from my co-authors. The findings offer significant insights for improving models in bioinformatics and enhancing our understanding of visual perception and attention.",
      tags: ["Machine Learning", "EEG Analysis", "Bioinformatics"],
    },
    {
      id: 2,
      title: "Machine Learning Advancements in Polymer Material Creation",
      date: "Published: 2024",
      publisher: "Taylor & Francis",
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003457176-7/machine-learning-advancements-polymer-material-creation-akshat-rastogi-divya-thakur-shubh-gupta-rupal-mishra-sandeep-balabantaray-meet-bikhani",
      description:
        "This research explores how machine learning can enhance polymer material design by predicting and optimizing properties. We used models like MultinomialNB, GaussianNB, MLPClassifier, and DecisionTreeClassifier, achieving up to 95% accuracy. My contribution focused on data preprocessing, model training, and result analysis. The study highlights machine learning's potential to uncover patterns in polymer behavior, facilitating advancements in material science.",
      tags: ["Machine Learning", "Material Science", "Polymer Design"],
    },
  ];

  return (
    <section id="research" className="research-section">
      <div className="section-container">
        <div className="section-title">
          <h2>Research Publications</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            Exploring the frontiers of technology through academic research
          </p>
        </div>

        <div className="research-container">
          {papers.map((paper) => (
            <article className="research-paper" key={paper.id}>
              <div className="paper-content">
                <div className="paper-head">
                  <h3 className="paper-title">{paper.title}</h3>
                  <div className="paper-meta">
                    <span className="paper-date">{paper.date}</span>
                    <span className="paper-publisher">{paper.publisher}</span>
                  </div>
                  <a
                    href={paper.link}
                    className="paper-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read Paper</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
                <p className="paper-description">{paper.description}</p>
                <div className="paper-tags">
                  {paper.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
