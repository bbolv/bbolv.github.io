import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="section container">
      <h2 className="section-title">Sobre Mí</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Soy Ingeniero de Software con más de 3 años de experiencia construyendo backend, aplicaciones móviles y sistemas fullstack escalables. Me especializo en TypeScript, Python, NestJS, React, y Flutter, y Redis para procesamiento de datos considerando procesos de alto rendimiento, entregando aplicaciones listas para producción con arquitectura limpia y mejores prácticas de desarrollo de software.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Actualmente trabajo como Manager del equipo de Desarrollo de Software de iTire, en donde diseño arquitectura de software, dirijo el desarrollo de software y me encargo de la gestión de proyectos de software., así como también me encargo del despliegue del sistema en App Store, Google Play, Railway, Vercel.
          </p>
          <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem', marginTop: '2rem' }}>
            Tecnologías con las que he trabajado recientemente:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> JavaScript (ES6+)</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> React</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> Node.js</li>
            </ul>
            <ul style={{ color: 'var(--text-secondary)', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> TypeScript</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> Bases de Datos SQL/NoSQL</li>
              <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: 'var(--accent-glow)' }}>▹</span> Arquitecturas de Software</li>
            </ul>
          </div>
        </div>

        {/* Contenedor de Imagen de Perfil */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '350px', margin: '0 auto', marginTop: '2rem' }}>
          <div className="glass-card" style={{ width: '100%', aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(0,0,0,0.05) 0%, rgba(244,244,245,1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '5rem', color: 'rgba(0,0,0,0.05)', fontWeight: 700 }}>BB</span>
            </div>
          </div>
          <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '2px solid var(--accent-glow)', borderRadius: '16px', zIndex: 1, opacity: 0.5 }}></div>
        </div>
      </div>
    </section>
  );
};

export default About;
