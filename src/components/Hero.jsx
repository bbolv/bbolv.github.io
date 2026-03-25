import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }} className="section glow-effect">
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="glass-panel" style={{ display: 'inline-block', maxWidth: '800px', padding: '3.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            Portafolio Profesional
          </p>
          <h1 className="section-title" style={{ margin: 0, fontSize: 'clamp(3rem, 8vw, 4.5rem)', lineHeight: 1.1, borderBottom: 'none' }}>
            Brandon Bautista.
          </h1>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--text-secondary)', marginTop: '0.5rem', lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Software.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginTop: '2rem', lineHeight: 1.8 }}>
            Soy <strong>Tech Lead</strong> e <strong>Ingeniero de Software</strong> experto en la creación de aplicaciones escalables (Móvil, Web y Backend). Fusiono principios de sistemas distribuidos y arquitectura de alto rendimiento para entregar productos robustos centrados en usuarios.
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="#proyectos" className="glass" style={{ padding: '0.8rem 2.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-block', border: '1px solid var(--border-color)', borderRadius: '9999px', background: 'var(--bg-primary)' }}>
              Ver Proyectos
            </a>
            <a href="#contacto" className="glass-card" style={{ padding: '0.8rem 2.5rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-block', background: 'transparent', borderRadius: '9999px' }}>
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
