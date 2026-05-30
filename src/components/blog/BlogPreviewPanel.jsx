import PostMeta from '../ui/PostMeta';
import Button, { ArrowRightIcon } from '../ui/Button';
import getPostSections from '../../utils/getPostSections';

const BookIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const BlogPreviewPanel = ({ post, onNavigate }) => {
  if (!post) {
    return (
      <div className="blog-preview-empty glass-panel">
        <BookIcon />
        <h3 className="blog-preview-empty__title">Vista previa de lectura</h3>
        <p className="blog-preview-empty__text">
          Selecciona cualquiera de los artículos de la lista de la izquierda para explorar su sinopsis y puntos clave.
        </p>
      </div>
    );
  }

  const sections = getPostSections(post);

  return (
    <div className="blog-preview-panel glass-panel animate-fade-in">
      <PostMeta
        category={post.category}
        type={post.type}
        date={post.date}
        readTime={post.readTime}
        size="md"
        className="blog-preview-panel__meta"
      />

      <h2 className="blog-preview-panel__title">{post.title}</h2>
      <p className="blog-preview-panel__summary">{post.summary}</p>

      {sections.length > 0 && (
        <div className="blog-preview-panel__sections">
          <h4 className="blog-preview-panel__heading">Estructura del artículo</h4>
          <ul className="blog-preview-panel__section-list">
            {sections.map((section) => (
              <li key={section} className="blog-preview-panel__section-item">
                <span className="blog-preview-panel__section-dot" aria-hidden="true" />
                {section}
              </li>
            ))}
          </ul>
        </div>
      )}

      {post.takeaways?.length > 0 && (
        <div className="blog-preview-panel__takeaways">
          <h4 className="blog-preview-panel__heading">¿Qué aprenderás en este post?</h4>
          <ul className="blog-preview-panel__takeaway-list">
            {post.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      <Button
        variant="primary"
        fullWidth
        icon={<ArrowRightIcon />}
        onClick={() => onNavigate(`#/blog/${post.id}`)}
      >
        Leer Artículo Completo
      </Button>
    </div>
  );
};

export default BlogPreviewPanel;
