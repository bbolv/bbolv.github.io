import { POSTS } from '../data/posts';
import PostMeta from './ui/PostMeta';
import Button from './ui/Button';

const Blog = ({ onNavigate }) => {
  const recentPosts = POSTS.slice(0, 5);

  return (
    <section id="blog" className="section container">
      <h2 className="section-title">Blog</h2>

      <div className="blog-landing-grid">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            className="blog-landing-card glass-card"
            onClick={() => onNavigate(`#/blog/${post.id}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate(`#/blog/${post.id}`);
              }
            }}
          >
            <div>
              <PostMeta
                category={post.category}
                type={post.type}
                readTime={post.readTime}
                size="sm"
              />
              <h3 className="blog-landing-card__title blog-card-title-hover">{post.title}</h3>
              <p className="blog-landing-card__excerpt">{post.excerpt}</p>
            </div>
            <div className="blog-landing-card__footer">
              <span>{post.date}</span>
              <span className="read-link-arrow">
                Leer <span>→</span>
              </span>
            </div>
          </article>
        ))}

        <button
          type="button"
          className="blog-landing-more glass-card"
          onClick={() => onNavigate('#/blog')}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
          <h3 className="blog-landing-more__title">Ver Todos los Artículos</h3>
          <p className="blog-landing-more__text">
            Explora nuestra bitácora completa con buscador y filtros avanzados.
          </p>
        </button>
      </div>

      <div className="blog-landing-cta">
        <Button
          variant="primary"
          className="animate-bounce"
          onClick={() => onNavigate('#/blog')}
        >
          Ir al catálogo del Blog →
        </Button>
      </div>
    </section>
  );
};

export default Blog;
