import PostMeta from '../ui/PostMeta';

const BlogPostCard = ({
  post,
  isSelected = false,
  isMobile = false,
  onSelect,
  onNavigate,
}) => {
  const handleTitleClick = (e) => {
    e.stopPropagation();
    onNavigate(`#/blog/${post.id}`);
  };

  return (
    <article
      className={`blog-post-card glass-card ${isSelected && !isMobile ? 'blog-post-card--selected' : ''}`}
      onClick={() => onSelect(post)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(post);
        }
      }}
    >
      <PostMeta
        category={post.category}
        type={post.type}
        readTime={post.readTime}
        size="sm"
      />

      <h3
        className="blog-post-card__title blog-card-title-hover"
        onClick={handleTitleClick}
      >
        {post.title}
      </h3>

      <p className="blog-post-card__excerpt">{post.excerpt}</p>

      <div className="blog-post-card__footer">
        <span className="post-meta__date">{post.date}</span>
        <span className="read-link-arrow">
          {isMobile ? 'Leer artículo' : 'Ver resumen'}
          <span>→</span>
        </span>
      </div>
    </article>
  );
};

export default BlogPostCard;
