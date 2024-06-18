import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import FullResume from './components/FullResume';

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'auto'});
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto'});
    }
  }, [pathname, hash, key]);
  return null;
};

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero title="Iqra Chaudhary" subtitle="I'm a child development specialist turned software engineer." />
              <About />
              <Projects />
              <Resume />
              <Contact />
            </>
          } />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
          <Route path="/full-resume" element={<FullResume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;