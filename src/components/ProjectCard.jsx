import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import Badge from './ui/Badge';

const ProjectCard = ({ project }) => {
  const { title, description, image, category, tags, github } = project;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleGitHubClick = (e) => {
    e.stopPropagation();
    window.open(github, '_blank', 'noopener,noreferrer');
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="project-card glass-card">
        <h3 className="project-card__title">{title}</h3>

        {image && (
          <button
            type="button"
            className="project-image-trigger"
            onClick={handleImageClick}
            aria-label={`Ampliar imagen de ${title}`}
          >
            <div className="project-image-wrapper">
              <img src={image} alt={title} className="project-image" />
              <span className="project-image-expand" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </span>
            </div>
          </button>
        )}

        <p className="project-card__description">{description}</p>

        <div className="project-card-footer">
          <Badge variant="category" size="sm">{category}</Badge>
          {tags.map((tag) => (
            <Badge key={tag} variant="tag" size="sm" className="project-card__tag">
              <img
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tag.toLowerCase()}.svg`}
                alt=""
                width={12}
                height={12}
                aria-hidden="true"
              />
              {tag}
            </Badge>
          ))}
          {github && (
            <button
              type="button"
              onClick={handleGitHubClick}
              className="project-github-btn glass"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                alt=""
                width={14}
                height={14}
                aria-hidden="true"
              />
              GitHub
            </button>
          )}
        </div>
      </div>

      <ImageLightbox
        src={image}
        alt={title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
