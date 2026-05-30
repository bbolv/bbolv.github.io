const PageHeader = ({ title, subtitle, className = '' }) => (
  <header className={`page-header ${className}`.trim()}>
    <h1 className="section-title page-header__title">{title}</h1>
    {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
  </header>
);

export default PageHeader;
