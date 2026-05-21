import React, { useState, useEffect } from 'react';
import { POSTS } from '../data/posts';

const BlogIndex = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');
  const [selectedPostId, setSelectedPostId] = useState(POSTS[0]?.id || null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla para comportamiento responsivo
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filtrar posts según categoría, clasificación y búsqueda
  const filteredPosts = POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesType = selectedType === 'Todos' || post.type === selectedType;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.type && post.type.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesType && matchesSearch;
  });

  // Si el post seleccionado ya no está en la lista filtrada, actualizar la selección
  useEffect(() => {
    if (filteredPosts.length > 0) {
      const isStillInList = filteredPosts.some(p => p.id === selectedPostId);
      if (!isStillInList) {
        setSelectedPostId(filteredPosts[0].id);
      }
    } else {
      setSelectedPostId(null);
    }
  }, [searchQuery, selectedCategory, selectedType, filteredPosts, selectedPostId]);

  const categories = ['Todos', 'Ciencia', 'Software', 'Música', 'General'];
  const types = ['Todos', 'Técnico', 'Divulgación', 'Personal'];
  const activePost = POSTS.find((p) => p.id === selectedPostId);

  // Helper para extraer subtítulos/secciones de un artículo para la tabla de contenidos
  const getSections = (post) => {
    if (!post) return [];
    return post.content
      .filter(block => block.type === 'heading')
      .map(block => block.text);
  };

  const handlePostClick = (post) => {
    if (isMobile) {
      // En móvil, clic directo va a la página de lectura
      onNavigate(`#/blog/${post.id}`);
    } else {
      // En desktop, clic actualiza el panel de previsualización
      setSelectedPostId(post.id);
    }
  };

  return (
    <section className="section container animate-fade-in" style={{ paddingTop: '7.5rem', minHeight: '90vh' }}>

      {/* Cabecera del Blog */}
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 className="section-title" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
          Blog Personal
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>

        </p>
      </div>

      {/* Filtros: Categorías + Búsqueda + Clasificación */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        marginBottom: '3rem'
      }}>
        {/* Fila 1: Categorías como control segmentado */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.25)',
          border: '1px solid var(--border-color)',
          borderRadius: '99px',
          padding: '4px',
          display: 'flex',
          gap: '2px',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }} className="hide-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  background: isSelected ? 'var(--text-primary)' : 'transparent',
                  color: isSelected ? '#E5E5E5' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '99px',
                  padding: '0.5rem 1.3rem',
                  fontSize: '0.82rem',
                  fontWeight: isSelected ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)',
                  whiteSpace: 'nowrap',
                  flex: '1 1 auto'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Fila 2: Búsqueda + Clasificación (Tipos) */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Input de Búsqueda */}
          <div style={{ position: 'relative', flex: '1 1 220px', maxWidth: '380px' }}>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.7rem 1.2rem 0.7rem 2.8rem',
                background: 'rgba(255, 255, 255, 0.45)',
                border: '1px solid var(--border-color)',
                borderRadius: '99px',
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                outline: 'none',
                transition: 'var(--transition-smooth)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--text-primary)';
                e.target.style.background = 'rgba(255, 255, 255, 0.6)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.background = 'rgba(255, 255, 255, 0.45)';
              }}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                left: '1.1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)'
              }}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* Control Segmentado: Clasificación/Tipo */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.25)',
            border: '1px solid var(--border-color)',
            borderRadius: '99px',
            padding: '4px',
            display: 'inline-flex',
            gap: '2px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            overflowX: 'auto'
          }} className="hide-scrollbar">
            {types.map((t) => {
              const isSelected = selectedType === t;
              return (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  style={{
                    background: isSelected ? 'var(--text-primary)' : 'transparent',
                    color: isSelected ? '#E5E5E5' : 'var(--text-secondary)',
                    border: 'none',
                    borderRadius: '99px',
                    padding: '0.5rem 1.3rem',
                    fontSize: '0.82rem',
                    fontWeight: isSelected ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Grid Principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)',
        gap: '2.5rem',
        alignItems: 'start'
      }}>

        {/* Columna Izquierda: Listado de Artículos */}
        <div style={{ gridColumn: isMobile ? 'span 1' : 'span 5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => {
              const isSelected = post.id === selectedPostId;
              return (
                <div
                  key={post.id}
                  onClick={() => handlePostClick(post)}
                  className="glass-card"
                  style={{
                    padding: '1.8rem',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    border: isSelected && !isMobile ? '1px solid var(--text-primary)' : '1px solid rgba(255, 255, 255, 0.7)',
                    transform: isSelected && !isMobile ? 'translateY(-4px)' : 'translateY(0)',
                    background: isSelected && !isMobile ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.4)',
                    boxShadow: isSelected && !isMobile ? '0 12px 32px rgba(0, 0, 0, 0.08)' : '0 8px 24px rgba(0, 0, 0, 0.02)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>

                    {/* Tags Dobles */}
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        background: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid var(--border-color)',
                        padding: '0.2rem 0.7rem',
                        borderRadius: '99px'
                      }}>
                        {post.category}
                      </span>
                      {post.type && (
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 500,
                          color: 'var(--text-secondary)',
                          border: '1px dashed var(--border-color)',
                          padding: '0.2rem 0.7rem',
                          borderRadius: '99px'
                        }}>
                          {post.type}
                        </span>
                      )}
                    </div>

                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={(e) => {
                      // Permitir clic directo en el título para ir a la página detallada
                      e.stopPropagation();
                      onNavigate(`#/blog/${post.id}`);
                    }}
                    style={{
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                      fontWeight: 650,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.8rem',
                      transition: 'color 0.2s',
                    }}
                    className="blog-card-title-hover"
                  >
                    {post.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    marginBottom: '1rem',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span>{post.date}</span>
                    <span
                      style={{
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        transition: 'transform 0.2s'
                      }}
                      className="read-link-arrow"
                    >
                      {isMobile ? 'Leer artículo' : 'Ver resumen'}
                      <span>→</span>
                    </span>
                  </div>

                </div>
              );
            })
          ) : (
            <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', width: '100%' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>No se encontraron artículos para tu búsqueda.</p>
            </div>
          )}
        </div>

        {/* Columna Derecha: Panel de Previsualización (Solo en Desktop) */}
        {!isMobile && (
          <div style={{ gridColumn: 'span 7', position: 'sticky', top: '7rem' }}>
            {activePost ? (
              <div className="glass-panel animate-fade-in" style={{ padding: '3rem', borderRadius: '24px' }}>

                {/* Cabecera de Vista Previa */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid var(--border-color)',
                      padding: '0.3rem 0.9rem',
                      borderRadius: '99px'
                    }}>
                      {activePost.category}
                    </span>
                    {activePost.type && (
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 550,
                        color: 'var(--text-secondary)',
                        border: '1px dashed var(--border-color)',
                        padding: '0.3rem 0.9rem',
                        borderRadius: '99px'
                      }}>
                        {activePost.type}
                      </span>
                    )}
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace', marginLeft: '0.4rem' }}>
                      {activePost.date}
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'monospace' }}>
                    {activePost.readTime}
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.1rem)',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem'
                }}>
                  {activePost.title}
                </h2>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  {activePost.summary}
                </p>

                {/* Secciones clave */}
                {getSections(activePost).length > 0 && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 600 }}>
                      Estructura del artículo
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {getSections(activePost).map((section, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-primary)', opacity: 0.5 }} />
                          <span>{section}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Puntos destacados / Aprendizajes */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.3)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '1.5rem 1.8rem',
                  marginBottom: '2.5rem'
                }}>
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>
                    ¿Qué aprenderás en este post?
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {activePost.takeaways.map((item, idx) => (
                      <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Acción Principal */}
                <button
                  onClick={() => onNavigate(`#/blog/${activePost.id}`)}
                  className="glass"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    width: '100%',
                    padding: '1.1rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
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
                  Leer Artículo Completo
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

              </div>
            ) : (
              <div className="glass-panel" style={{
                padding: '4rem 3rem',
                textAlign: 'center',
                borderRadius: '24px',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', opacity: 0.6 }}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Vista previa de lectura</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '320px', lineHeight: 1.6 }}>
                  Selecciona cualquiera de los artículos de la lista de la izquierda para explorar su sinopsis y puntos clave.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogIndex;
