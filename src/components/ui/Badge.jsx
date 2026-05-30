const Badge = ({ variant = 'category', size = 'md', className = '', children }) => (
  <span className={`badge badge--${variant} badge--${size} ${className}`.trim()}>
    {children}
  </span>
);

export default Badge;
