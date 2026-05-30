import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GridBackground from './components/GridBackground';

// Nuevos componentes de Blog
import BlogIndex from './components/BlogIndex';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Utilidad de scroll para anclas en la Landing Page
  useEffect(() => {
    const hash = window.location.hash;
    // Si no es ruta de blog (ej. #/sobre-mi, #trayectoria, #/contacto, #/ o vacío)
    if (!hash.startsWith('#/blog')) {
      const cleanAnchor = hash.replace('#/', '').replace('#', '');
      
      if (cleanAnchor && cleanAnchor !== 'inicio') {
        // Pequeño retardo para asegurar que la landing page esté renderizada
        const timer = setTimeout(() => {
          const element = document.getElementById(cleanAnchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
        return () => clearTimeout(timer);
      } else if (cleanAnchor === 'inicio' || !cleanAnchor) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [currentHash]);

  const handleNavigate = (newHash) => {
    window.location.hash = newHash;
  };

  // Determinar qué vista renderizar basándonos en el hash
  const renderContent = () => {
    if (currentHash === '#/blog' || currentHash === '#blog') {
      return <BlogIndex onNavigate={handleNavigate} />;
    } else if (currentHash.startsWith('#/blog/')) {
      const postId = currentHash.replace('#/blog/', '');
      return <BlogPost postId={postId} onNavigate={handleNavigate} />;
    } else if (currentHash === '#/proyectos' || currentHash === '#proyectos') {
      return <Projects onNavigate={handleNavigate} />;
    } else {
      // Landing Page tradicional
      return (
        <>
          <Hero />
          <About />
          <Experience />
          <Blog onNavigate={handleNavigate} />
          <Contact />
        </>
      );
    }
  };

  return (
    <div className="app-container">
      <GridBackground />
      <Navbar currentHash={currentHash} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
