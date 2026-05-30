const SearchIcon = () => (
  <svg
    className="search-input__icon"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const SearchInput = ({
  value,
  onChange,
  placeholder = 'Buscar...',
  variant = 'icon',
  className = '',
  id,
}) => (
  <div className={`search-input search-input--${variant} ${className}`.trim()}>
    {variant === 'icon' && <SearchIcon />}
    <input
      id={id}
      type="search"
      className="search-input__field"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default SearchInput;
