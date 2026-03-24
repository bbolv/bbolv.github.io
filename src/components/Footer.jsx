import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2.5rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
      <p>Diseñado y Construido por <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Brandon Bautista</span>.</p>
      <p style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
