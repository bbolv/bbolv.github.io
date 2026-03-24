import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }} className="section animate-fade-in glow-effect">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <p style={{ color: 'var(--accent-glow)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Hola, mi nombre es
        </p>
        <h1 className="section-title" style={{ margin: 0, fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, borderBottom: 'none' }}>
          Brandon Bautista.
        </h1>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.1, fontWeight: 700 }}>
          Construyo para la web.
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', marginTop: '2rem', lineHeight: 1.7 }}>
          Soy un <strong>Ingeniero de Software</strong> especializado en crear experiencias digitales excepcionales, accesibles y con diseño moderno. Actualmente, estoy enfocado en construir productos escalables y centrados en el usuario.
        </p>
        <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="#proyectos" className="glass" style={{ padding: '1rem 2.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-block' }}>
            Ver Proyectos
          </a>
          <a href="#contacto" className="glass-card" style={{ padding: '1rem 2.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-block', border: '1px solid var(--border-color)', borderRadius: '9999px', background: 'transparent' }}>
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
