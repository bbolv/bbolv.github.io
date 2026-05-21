import React, { useState, useEffect } from 'react';
import { POSTS } from '../data/posts';

const BlogPost = ({ postId, onNavigate }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const post = POSTS.find((p) => p.id === postId);

  useEffect(() => {
    // Desplazarse al inicio de la página al cargar el post
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [postId]);

  if (!post) {
    return (
      <div className="section container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Artículo no encontrado</h2>
        <button 
          onClick={() => onNavigate('#/blog')}
          className="glass" 
          style={{ padding: '0.8rem 2rem', color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}
        >
          Volver al Blog
        </button>
      </div>
    );
  }

  const handleCopy = (codeText, index) => {
    navigator.clipboard.writeText(codeText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <article className="section container animate-fade-in" style={{ paddingTop: '7rem', maxWidth: '850px' }}>
      
      {/* Botón de Retorno */}
      <button
        onClick={() => onNavigate('#/blog')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          fontWeight: 500,
          cursor: 'pointer',
          marginBottom: '2rem',
          transition: 'color 0.2s, transform 0.2s',
          padding: '0.5rem 0'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'var(--text-primary)';
          e.target.style.transform = 'translateX(-4px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'var(--text-secondary)';
          e.target.style.transform = 'translateX(0)';
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Volver al blog
      </button>

      <div className="glass-panel" style={{ padding: '3.5rem 2.5rem', borderRadius: '24px' }}>
        
        {/* Cabecera del Artículo */}
        <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2.5rem' }}>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{
                color: 'var(--text-primary)',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid var(--border-color)',
                padding: '0.4rem 1.2rem',
                borderRadius: '99px',
                fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                fontWeight: 600
              }}>
                {post.category}
              </span>
              {post.type && (
                <span style={{
                  color: 'var(--text-secondary)',
                  border: '1px dashed var(--border-color)',
                  padding: '0.4rem 1.2rem',
                  borderRadius: '99px',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  fontWeight: 550
                }}>
                  {post.type}
                </span>
              )}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontFamily: 'monospace' }}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem'
          }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #111111, #555555)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '0.9rem'
            }}>
              BB
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>Brandon Bautista</p>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Tech Lead & Físico Teórico</p>
            </div>
          </div>

        </header>

        {/* Cuerpo del Artículo */}
        <section className="article-body" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', lineHeight: 1.85 }}>
          {post.content.map((block, index) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={index} style={{ marginBottom: '1.8rem', color: 'var(--text-secondary)' }}>
                    {block.text}
                  </p>
                );
              
              case 'heading':
                return (
                  <h2 key={index} style={{
                    fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginTop: '2.5rem',
                    marginBottom: '1.2rem',
                    letterSpacing: '-0.02em'
                  }}>
                    {block.text}
                  </h2>
                );
              
              case 'blockquote':
                return (
                  <blockquote key={index} style={{
                    borderLeft: '4px solid var(--text-primary)',
                    paddingLeft: '1.5rem',
                    margin: '2rem 0',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    background: 'rgba(0, 0, 0, 0.02)',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    paddingRight: '1rem',
                    borderRadius: '0 8px 8px 0'
                  }}>
                    <p style={{ margin: 0, marginBottom: block.author ? '0.5rem' : 0, fontSize: 'clamp(1.05rem, 2.5vw, 1.2rem)', lineHeight: 1.7 }}>
                      "{block.text}"
                    </p>
                    {block.author && (
                      <cite style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', fontStyle: 'normal' }}>
                        — {block.author}
                      </cite>
                    )}
                  </blockquote>
                );

              case 'list':
                return (
                  <ul key={index} style={{ marginBottom: '1.8rem', paddingLeft: '1.5rem', listStyleType: 'square' }}>
                    {block.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.6rem', color: 'var(--text-secondary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              
              case 'code':
                return (
                  <div key={index} style={{
                    margin: '2.2rem 0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    background: '#18181B', // Color gris oscuro carbón de consola
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                  }}>
                    {/* Barra superior de la Consola */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: '#27272A',
                      padding: '0.6rem 1.2rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <span style={{ fontSize: '0.75rem', color: '#A1A1AA', fontFamily: 'monospace', textTransform: 'lowercase', fontWeight: 500 }}>
                        {block.language || 'code'}
                      </span>
                      <button
                        onClick={() => handleCopy(block.code, index)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: copiedIndex === index ? '#34D399' : '#A1A1AA',
                          fontSize: '0.75rem',
                          fontFamily: 'monospace',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          fontWeight: 500,
                          transition: 'color 0.2s'
                        }}
                      >
                        {copiedIndex === index ? (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            ¡Copiado!
                          </>
                        ) : (
                          <>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copiar
                          </>
                        )}
                      </button>
                    </div>

                    {/* Contenido de código */}
                    <pre style={{
                      margin: 0,
                      padding: '1.2rem',
                      overflowX: 'auto',
                      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                      color: '#E4E4E7',
                      fontFamily: '"Fira Code", monospace, "SF Mono", Courier',
                      lineHeight: 1.6
                    }}>
                      <code>{block.code}</code>
                    </pre>
                  </div>
                );
              
              default:
                return null;
            }
          })}
        </section>

      </div>
    </article>
  );
};

export default BlogPost;
