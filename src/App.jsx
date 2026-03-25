import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';

function App() {
  return (
    <div className="app-container">
      {/* <ParticleBackground /> Puedes descomentar este si prefieres el fondo aleatorio */}
      <GridBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
