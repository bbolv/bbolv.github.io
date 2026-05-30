import Badge from './Badge';

const PostMeta = ({
  category,
  type,
  date,
  readTime,
  size = 'md',
  layout = 'compact',
  className = '',
}) => {
  if (layout === 'article') {
    return (
      <div className={`post-meta post-meta--article ${className}`.trim()}>
        <div className="post-meta__badges">
          {category && <Badge variant="category" size="md">{category}</Badge>}
          {type && <Badge variant="type" size="md">{type}</Badge>}
        </div>
        {(date || readTime) && (
          <div className="post-meta__times">
            {date && <span>{date}</span>}
            {date && readTime && <span aria-hidden="true">•</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`post-meta post-meta--${size} ${className}`.trim()}>
      <div className="post-meta__badges">
        {category && <Badge variant="category" size={size}>{category}</Badge>}
        {type && <Badge variant="type" size={size}>{type}</Badge>}
        {date && size === 'md' && (
          <span className="post-meta__date post-meta__date--inline">{date}</span>
        )}
      </div>
      {readTime && (
        <div className="post-meta__info">
          <span className="post-meta__read-time">{readTime}</span>
        </div>
      )}
    </div>
  );
};

export default PostMeta;
