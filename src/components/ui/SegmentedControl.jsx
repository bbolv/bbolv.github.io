const SegmentedControl = ({
  options,
  value,
  onChange,
  className = '',
  stretch = false,
  ariaLabel = 'Filtros',
}) => (
  <div
    className={`segmented-control hide-scrollbar ${stretch ? 'segmented-control--stretch' : ''} ${className}`.trim()}
    role="tablist"
    aria-label={ariaLabel}
  >
    {options.map((option) => {
      const isSelected = value === option;
      return (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={isSelected}
          className={`segmented-control__option ${isSelected ? 'segmented-control__option--active' : ''}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      );
    })}
  </div>
);

export default SegmentedControl;
