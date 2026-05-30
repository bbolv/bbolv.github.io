const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Button = ({
  variant = 'glass',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  children,
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    size !== 'md' ? `btn--${size}` : '',
    fullWidth ? 'btn--full' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

export { ArrowRightIcon };
export default Button;
