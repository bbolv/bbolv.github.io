import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'var(--transition-smooth)',
      background: scrolled ? 'var(--bg-glass)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent'
    }}>
      <div style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)', cursor: 'pointer' }}>
        bbolv.
      </div>

      <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}
        </svg>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        <a href="#inicio" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-glow)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}>Inicio</a>
        <a href="#sobre-mi" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Sobre Mí</a>
        <a href="#trayectoria" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Trayectoria</a>
        <a href="#blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 500, transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Blog</a>
        <a href="#contacto" className="glass" style={{ padding: '0.5rem 1.2rem', color: 'var(--text-primary)', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', fontWeight: 500 }}>Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
