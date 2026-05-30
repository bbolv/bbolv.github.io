import React, { useState, useEffect } from 'react';

const Navbar = ({ currentHash = '#/', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (hashPattern) => {
    if (hashPattern === '#/blog') {
      return currentHash.startsWith('#/blog');
    }
    if (hashPattern === '#/') {
      return currentHash === '#/' || currentHash === '#/inicio' || currentHash === '' || currentHash === '#inicio';
    }
    return currentHash === hashPattern || currentHash === hashPattern.replace('#/', '#');
  };

  const getLinkStyle = (hashPattern, isButton = false) => {
    const active = isActive(hashPattern);

    if (isButton) {
      return {
        padding: '0.5rem 1.2rem',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
        fontWeight: active ? 650 : 500,
        border: active ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
        borderRadius: '9999px',
        background: active ? 'rgba(255, 255, 255, 0.9)' : 'var(--bg-glass)',
        transition: 'var(--transition-smooth)'
      };
    }

    return {
      color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
      textDecoration: 'none',
      fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
      fontWeight: active ? 650 : 500,
      transition: 'color 0.2s',
      position: 'relative'
    };
  };

  const handleLinkClick = (e, targetHash) => {
    setIsMobileMenuOpen(false);
    // Permitimos la propagación para que el hash de la ventana cambie
  };

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
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: (scrolled || isMobileMenuOpen) ? 'var(--bg-glass)' : 'transparent',
        backdropFilter: (scrolled || isMobileMenuOpen) ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: (scrolled || isMobileMenuOpen) ? 'blur(16px)' : 'none',
        borderBottom: (scrolled || isMobileMenuOpen) ? '1px solid var(--border-color)' : '1px solid transparent',
        transition: 'var(--transition-smooth)',
        zIndex: -1
      }} />
      <div
        onClick={() => handleNavigate('#/')}
        style={{ fontWeight: 700, fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '-0.02em', color: 'var(--text-primary)', cursor: 'pointer' }}
      >
        bb <span style={{ color: 'var(--text-secondary)' }} >olv</span>
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
        <a
          href="#/"
          onClick={(e) => handleLinkClick(e, '#/')}
          style={getLinkStyle('#/')}
          onMouseEnter={(e) => { if (!isActive('#/')) e.target.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { if (!isActive('#/')) e.target.style.color = 'var(--text-secondary)'; }}
        >
          Inicio
        </a>
        <a
          href="#/sobre-mi"
          onClick={(e) => handleLinkClick(e, '#/sobre-mi')}
          style={getLinkStyle('#/sobre-mi')}
          onMouseEnter={(e) => { if (!isActive('#/sobre-mi')) e.target.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { if (!isActive('#/sobre-mi')) e.target.style.color = 'var(--text-secondary)'; }}
        >
          Sobre Mí
        </a>
        <a
          href="#/trayectoria"
          onClick={(e) => handleLinkClick(e, '#/trayectoria')}
          style={getLinkStyle('#/trayectoria')}
          onMouseEnter={(e) => { if (!isActive('#/trayectoria')) e.target.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { if (!isActive('#/trayectoria')) e.target.style.color = 'var(--text-secondary)'; }}
        >
          Trayectoria
        </a>
        <a
          href="#/blog"
          onClick={(e) => handleLinkClick(e, '#/blog')}
          style={getLinkStyle('#/blog')}
          onMouseEnter={(e) => { if (!isActive('#/blog')) e.target.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { if (!isActive('#/blog')) e.target.style.color = 'var(--text-secondary)'; }}
        >
          Blog
        </a>
        <a
          href="#/proyectos"
          onClick={(e) => handleLinkClick(e, '#/proyectos')}
          style={getLinkStyle('#/proyectos')}
          onMouseEnter={(e) => { if (!isActive('#/proyectos')) e.target.style.color = 'var(--text-primary)'; }}
          onMouseLeave={(e) => { if (!isActive('#/proyectos')) e.target.style.color = 'var(--text-secondary)'; }}
        >
          Proyectos
        </a>
        <a
          href="#/contacto"
          onClick={(e) => handleLinkClick(e, '#/contacto')}
          className="glass"
          style={getLinkStyle('#/contacto', true)}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
