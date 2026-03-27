import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Manager de Desarrollo de Software / Tech Lead',
      company: 'iTire',
      period: 'Feb 2024 - Presente',
      description: 'Lidero el desarrollo y arquitectura de las plataformas web, móvil (iOS/Android) y backend. He diseñado arquitecturas multiplataforma "offline-first", pipelines de ingestión de telemetría de alto volumen usando Redis, e integraciones de hardware Bluetooth (BLE). Además, implementé un ecosistema robusto de microservicios y un Gateway GraphQL que soporta las operaciones críticas de múltiples empresas de transporte.',
      tech: ['Flutter', 'Angular', 'TypeScript', 'NestJS', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'XMARS',
      period: 'Jun 2022 - Feb 2024',
      description: 'Desarrollo de interfaces responsivas y sistemas backend escalables. Diseñé la lógica de presencia en tiempo real de los usuarios sincronizando el estado con WebSockets (Socket.IO). Además, refactoricé la arquitectura completa del chat empresarial (individual y grupal), mejorando significativamente su rendimiento, mantenibilidad y la capacidad de integrar nuevas funcionalidades.',
      tech: ['React', 'Node.js', 'Express', 'GraphQL', 'Socket.IO', 'MongoDB']
    }
  ];

  return (
    <section id="trayectoria" className="section container">
      <h2 className="section-title">Mi Trayectoria</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card experience-card" style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {exp.role} <span style={{ color: 'var(--accent-glow)' }}>@ {exp.company}</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              {exp.period}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {exp.tech.map((tech, i) => (
                <span key={i} style={{ color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', padding: '0.3rem 1rem', borderRadius: '99px', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', fontWeight: 500 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subsección de Publicaciones */}
      <div style={{ maxWidth: '800px', margin: '5rem auto 0 auto' }}>
        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'var(--text-primary)', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Investigación Científica</h3>
        <div className="glass-panel" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.8)', border: '1px solid var(--border-color)', padding: '0.4rem 1.2rem', borderRadius: '99px', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', fontWeight: 600 }}>
              Física Teórica
            </span>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontFamily: 'monospace', margin: 0, padding: '0.4rem 0' }}>2023</p>
          </div>
          
          <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.4 }}>Geodesic structure of a rotating regular black hole</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Análisis matemático y astrofísico profundo sobre el movimiento de partículas (estructura geodésica) en el espacio-tiempo de un agujero negro regular en rotación. Publicado en Springer.
          </p>
          
          <a href="https://link.springer.com/article/10.1007/s10714-023-03114-7" target="_blank" rel="noopener noreferrer" className="glass" style={{ padding: '0.8rem 2rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '9999px', fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
            Leer Publicación <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
