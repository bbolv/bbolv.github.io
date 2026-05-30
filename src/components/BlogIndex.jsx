import { useState, useEffect } from 'react';
import { POSTS } from '../data/posts';
import PageSection from './ui/PageSection';
import PageHeader from './ui/PageHeader';
import FilterBar from './ui/FilterBar';
import BlogPostCard from './blog/BlogPostCard';
import BlogPreviewPanel from './blog/BlogPreviewPanel';
import useIsMobile from '../hooks/useIsMobile';

const CATEGORIES = ['Todos', 'Ciencia', 'Software', 'Música', 'General'];
const TYPES = ['Todos', 'Técnico', 'Divulgación', 'Personal'];

const BlogIndex = ({ onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');
  const [selectedPostId, setSelectedPostId] = useState(POSTS[0]?.id || null);
  const isMobile = useIsMobile();

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

  useEffect(() => {
    if (filteredPosts.length > 0) {
      const isStillInList = filteredPosts.some((p) => p.id === selectedPostId);
      if (!isStillInList) {
        setSelectedPostId(filteredPosts[0].id);
      }
    } else {
      setSelectedPostId(null);
    }
  }, [searchQuery, selectedCategory, selectedType, filteredPosts, selectedPostId]);

  const activePost = POSTS.find((p) => p.id === selectedPostId);

  const handlePostClick = (post) => {
    if (isMobile) {
      onNavigate(`#/blog/${post.id}`);
    } else {
      setSelectedPostId(post.id);
    }
  };

  return (
    <PageSection className="blog-section">
      <PageHeader title="Blog Personal" />

      <FilterBar
        primaryOptions={CATEGORIES}
        primaryValue={selectedCategory}
        onPrimaryChange={setSelectedCategory}
        primaryAriaLabel="Categorías del blog"
        secondaryOptions={TYPES}
        secondaryValue={selectedType}
        onSecondaryChange={setSelectedType}
        secondaryAriaLabel="Tipo de artículo"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Buscar artículos..."
        showSearch
        showScrollHint={isMobile}
      />

      <div className={`blog-layout ${isMobile ? 'blog-layout--mobile' : ''}`}>
        <div className="blog-layout__list">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
                isSelected={post.id === selectedPostId}
                isMobile={isMobile}
                onSelect={handlePostClick}
                onNavigate={onNavigate}
              />
            ))
          ) : (
            <div className="blog-empty glass-panel">
              <p>No se encontraron artículos para tu búsqueda.</p>
            </div>
          )}
        </div>

        {!isMobile && (
          <div className="blog-layout__preview">
            <BlogPreviewPanel post={activePost} onNavigate={onNavigate} />
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default BlogIndex;
