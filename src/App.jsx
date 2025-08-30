import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects/Projects';
import WhatsAppButton from './components/WhatsupButton';

const App = () => {
  return (
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
      <WhatsAppButton/>
      <Footer />
    </Router>
  );
};

export default App;
