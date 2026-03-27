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
                <span key={i} style={{ color: 'var(--accent-glow)', background: 'rgba(59,130,246,0.1)', padding: '0.3rem 1rem', borderRadius: '99px', fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', fontWeight: 500 }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
