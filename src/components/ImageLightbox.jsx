import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ImageLightbox = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return createPortal(
    <div
      className="image-lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Vista ampliada'}
    >
      <div
        className="image-lightbox__panel glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="image-lightbox__close glass"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img src={src} alt={alt} className="image-lightbox__img" />
        {alt && <p className="image-lightbox__caption">{alt}</p>}
      </div>
    </div>,
    document.body
  );
};

export default ImageLightbox;
