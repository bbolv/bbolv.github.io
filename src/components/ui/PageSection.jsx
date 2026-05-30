const PageSection = ({ className = '', children }) => (
  <section className={`section container page-section animate-fade-in ${className}`.trim()}>
    {children}
  </section>
);

export default PageSection;
