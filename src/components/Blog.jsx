import React from 'react';
import { POSTS } from '../data/posts';

const Blog = ({ onNavigate }) => {
  // Obtener los 5 artículos más recientes
  const recentPosts = POSTS.slice(0, 5);

  return (
    <section id="blog" className="section container">
      <h2 className="section-title">Blog</h2>
      
      {/* Grid de Artículos Recientes */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.2rem',
        marginBottom: '4rem'
      }}>
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="glass-card"
            style={{
              padding: '2.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '16px',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}
            onClick={() => onNavigate(`#/blog/${post.id}`)}
          >
            <div>
              {/* Categoría, Tipo y Tiempo de Lectura */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span style={{
                    color: 'var(--text-primary)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid var(--border-color)',
                    padding: '0.3rem 1rem',
                    borderRadius: '99px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {post.category}
                  </span>
                  {post.type && (
                    <span style={{
                      color: 'var(--text-secondary)',
                      border: '1px dashed var(--border-color)',
                      padding: '0.3rem 1rem',
                      borderRadius: '99px',
                      fontSize: '0.75rem',
                      fontWeight: 550
                    }}>
                      {post.type}
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                  {post.readTime}
                </span>
              </div>

              {/* Título */}
              <h3
                style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                  transition: 'color 0.2s'
                }}
                className="blog-card-title-hover"
              >
                {post.title}
              </h3>

              {/* Sinopsis corta */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {post.excerpt}
              </p>
            </div>

            {/* Fecha y Flecha */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '1.2rem',
              marginTop: 'auto',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)'
            }}>
              <span>{post.date}</span>
              <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                Leer <span className="read-arrow-animate">→</span>
              </span>
            </div>
          </div>
        ))}

        {/* Tarjeta especial que invita a ver más */}
        <div
          className="glass-card"
          style={{
            padding: '2.2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px',
            textAlign: 'center',
            borderStyle: 'dashed',
            borderColor: 'var(--border-color)',
            background: 'rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            minHeight: '280px'
          }}
          onClick={() => onNavigate('#/blog')}
          onMouseEnter={(e) => e.target.style.borderColor = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.borderColor = 'var(--border-color)'}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <path d="M12 5v14M5 12h14"></path>
          </svg>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>
            Ver Todos los Artículos
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', maxWidth: '200px', lineHeight: 1.5 }}>
            Explora nuestra bitácora completa con buscador y filtros avanzados.
          </p>
        </div>

      </div>

      {/* Botón Centralizado inferior */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => onNavigate('#/blog')}
          className="glass animate-bounce"
          style={{
            padding: '0.9rem 2.5rem',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '9999px',
            transition: 'var(--transition-smooth)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--text-primary)';
            e.target.style.color = '#E5E5E5';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--bg-glass)';
            e.target.style.color = 'var(--text-primary)';
          }}
        >
          Ir al catálogo del Blog →
        </button>
      </div>

    </section>
  );
};

export default Blog;
