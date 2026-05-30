const ScrollHint = () => (
  <div className="scroll-hint" aria-hidden="true">
    <span className="scroll-hint__label">Deslizar</span>
    <svg
      className="scroll-hint__arrow"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </div>
);

export default ScrollHint;
