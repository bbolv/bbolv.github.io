import React from 'react';

const Blog = () => {
  const posts = [
    { title: 'Construyendo con Glassmorphism', date: 'Octubre 2024', summary: 'Una inmersión profunda en cómo lograr efectos de cristal elegantes usando Vanilla CSS en 2024.' },
    { title: 'Ingeniería Frontend Escalable', date: 'Septiembre 2024', summary: 'Técnicas avanzadas para no bloquear el hilo principal y mejorar el SEO con React y arquitecturas modernas.' }
  ];

  return (
    <section id="blog" className="section container">
      <h2 className="section-title">Notas & Blog</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {posts.map((post, index) => (
          <div key={index} className="glass" style={{ padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
            <p style={{ color: 'var(--accent-glow)', fontSize: '0.8rem', marginBottom: '1rem', fontFamily: 'monospace' }}>{post.date}</p>
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>{post.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{post.summary}</p>
            <a href="#blog" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Leer más <span style={{ transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
