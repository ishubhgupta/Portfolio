import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import SocialLinksVertical from "./components/shared/SocialLinksVertical";
import ResumeNavButton from "./components/shared/ResumeNavButton";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Research from "./components/sections/Research";
import Contact from "./components/sections/Contact";
import { useState, useEffect } from "react";
import "./styles/global.css";
import "./App.css";

function App() {
  const [showSocialAndResume, setShowSocialAndResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        // Show components when home section is out of view (when user scrolled past it)
        const isHomePassed = rect.bottom <= 100;
        setShowSocialAndResume(isHomePassed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      
      {/* Vertical Social Links - Hidden on Home section */}
      <SocialLinksVertical isVisible={showSocialAndResume} />
      
      {/* Resume Download Button - Hidden on Home section */}
      <ResumeNavButton isVisible={showSocialAndResume} />
    </div>
  );
}

export default App;
