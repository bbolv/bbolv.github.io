import { useEffect } from 'react';
import { POSTS } from '../data/posts';
import PageSection from './ui/PageSection';
import PostMeta from './ui/PostMeta';
import Button from './ui/Button';
import ArticleContent from './blog/ArticleContent';

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const BlogPost = ({ postId, onNavigate }) => {
  const post = POSTS.find((p) => p.id === postId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [postId]);

  if (!post) {
    return (
      <PageSection className="article-page article-page--not-found">
        <h2 className="article-page__not-found-title">Artículo no encontrado</h2>
        <Button variant="glass" onClick={() => onNavigate('#/blog')}>
          Volver al Blog
        </Button>
      </PageSection>
    );
  }

  return (
    <PageSection className="article-page">
      <Button
        variant="ghost"
        className="article-page__back"
        icon={<BackIcon />}
        iconPosition="left"
        onClick={() => onNavigate('#/blog')}
      >
        Volver al blog
      </Button>

      <div className="article-page__panel glass-panel">
        <header className="article-header">
          <PostMeta
            layout="article"
            category={post.category}
            type={post.type}
            date={post.date}
            readTime={post.readTime}
            className="article-header__meta"
          />

          <h1 className="article-header__title">{post.title}</h1>

          <div className="article-header__author">
            <div className="article-header__avatar" aria-hidden="true">BB</div>
            <div>
              <p className="article-header__author-name">Brandon Bautista</p>
              <p className="article-header__author-role">Tech Lead & Físico Teórico</p>
            </div>
          </div>
        </header>

        <ArticleContent content={post.content} />
      </div>
    </PageSection>
  );
};

export default BlogPost;
