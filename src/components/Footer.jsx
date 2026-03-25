import React from 'react';

const Footer = () => {
  return (
    <footer className="container" style={{ paddingBottom: '3rem' }}>
      <div className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Diseñado y Construido por <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Brandon Bautista</span>.
        </p>
        <p style={{ opacity: 0.8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
