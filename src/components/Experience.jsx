import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'Manager de Desarrollo de Software',
      company: 'iTire',
      period: '2024 - Presente',
      description: 'Liderando la arquitectura y desarrollo de interfaces de usuario para sistemas de gran escala. Mejoramos el rendimiento del renderizado en un 40% aplicando buenas prácticas.',
      tech: ['Angular', 'TypeScript', 'NestJS', 'MongoDB', 'Redis']
    },
    {
      role: 'Desarrollador Full Stack',
      company: 'Xmars',
      period: '2020 - 2023',
      description: 'Gestion de chat empresarial',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="trayectoria" className="section container">
      <h2 className="section-title">Mi Trayectoria</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {exp.role} <span style={{ color: 'var(--accent-glow)' }}>@ {exp.company}</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
              {exp.period}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {exp.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {exp.tech.map((tech, i) => (
                <span key={i} style={{ color: 'var(--accent-glow)', background: 'rgba(59,130,246,0.1)', padding: '0.3rem 1rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 500 }}>
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
