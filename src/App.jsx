import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import WhatsAppButton from "./components/WhatsupButton";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>
          Roushan Bhadani | Full-Stack & ReactJS Developer Portfolio
        </title>
        <meta
          name="description"
          content="Portfolio website of Roushan Bhadani, Full-Stack Developer skilled in ReactJS, Java, and UI/UX design."
        />
        <meta
          name="keywords"
          content="Roushan Bhadani, ReactJS Developer, Full Stack Developer, Java Developer, UI/UX Designer, Portfolio"
        />
        <meta name="author" content="Roushan Bhadani" />
        <meta
          property="og:title"
          content="Roushan Bhadani | Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Portfolio website showcasing skills in ReactJS, Java, and Frontend development."
        />
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="container">
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="work-experience">
                    <WorkExperience />
                  </section>
                  <section id="contact">
                    <ContactMe />
                  </section>
                </div>
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </Router>
    </>
  );
};

export default App;
