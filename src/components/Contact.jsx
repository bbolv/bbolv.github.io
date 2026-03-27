import React from 'react';

const Contact = () => {
  return (
    <section id="contacto" className="section container" style={{ textAlign: 'center', paddingBottom: '12rem' }}>
      <p style={{ color: 'var(--accent-glow)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1rem', textTransform: 'uppercase', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
        ¿Qué sigue?
      </p>
      <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', borderBottom: 'none', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
        Ponte en Contacto
      </h2>
      <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', maxWidth: '600px', margin: '0 auto 3.5rem auto', lineHeight: 1.7 }}>
        ¿Quieres saludar? ¡intentaré responder lo más rápido posible!
      </p>
      <a href="mailto:branbolv@gmail.com" className="glass" style={{ padding: '1.2rem 3rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', display: 'inline-block' }}>
        Saludar
      </a>
    </section>
  );
};

export default Contact;
