// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import Skills from './components/Skills/Skills';
// import WorkExperience from './components/WorkExperience/WorkExperience';
// import ContactMe from './components/ContactMe/ContactMe';
// import Footer from './components/Footer/Footer';

// const App = () => {
//   return (
//     <>
//       {/* <ParticleBackground/> */}
//       <Navbar/>
//       <div className='container'>
//         <Hero />
//         <Skills />
//         <WorkExperience />
//         <ContactMe />
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
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
      <Footer />
    </>
  );
}

export default App;

