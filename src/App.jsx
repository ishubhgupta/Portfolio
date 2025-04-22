import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Research from "./components/sections/Research";
import Contact from "./components/sections/Contact";
import "./styles/global.css";
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
