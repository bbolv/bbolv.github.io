import { useState } from 'react';

const CopyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArticleContent = ({ content }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (codeText, index) => {
    navigator.clipboard.writeText(codeText);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="article-body">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index} className="article-body__paragraph">{block.text}</p>;

          case 'heading':
            return <h2 key={index} className="article-body__heading">{block.text}</h2>;

          case 'blockquote':
            return (
              <blockquote key={index} className="article-body__blockquote">
                <p className="article-body__blockquote-text">&ldquo;{block.text}&rdquo;</p>
                {block.author && (
                  <cite className="article-body__blockquote-author">— {block.author}</cite>
                )}
              </blockquote>
            );

          case 'list':
            return (
              <ul key={index} className="article-body__list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          case 'code':
            return (
              <div key={index} className="code-block">
                <div className="code-block__header">
                  <span className="code-block__language">{block.language || 'code'}</span>
                  <button
                    type="button"
                    className={`code-block__copy ${copiedIndex === index ? 'code-block__copy--copied' : ''}`}
                    onClick={() => handleCopy(block.code, index)}
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckIcon />
                        ¡Copiado!
                      </>
                    ) : (
                      <>
                        <CopyIcon />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
                <pre className="code-block__pre">
                  <code>{block.code}</code>
                </pre>
              </div>
            );

          default:
            return null;
        }
      })}
    </section>
  );
};

export default ArticleContent;
