import SegmentedControl from './SegmentedControl';
import SearchInput from './SearchInput';
import ScrollHint from './ScrollHint';

/**
 * Barra de filtros reutilizable para Blog y Proyectos.
 * Cambia el tono global editando --filter-segment-bg en index.css.
 */
const FilterBar = ({
  primaryOptions,
  primaryValue,
  onPrimaryChange,
  primaryAriaLabel = 'Categorías',
  secondaryOptions,
  secondaryValue,
  onSecondaryChange,
  secondaryAriaLabel = 'Clasificación',
  searchValue,
  onSearchChange,
  searchVariant = 'simple',
  showSearch = false,
  showScrollHint = false,
  className = '',
}) => (
  <div className={`filter-bar ${className}`.trim()}>
    <SegmentedControl
      options={primaryOptions}
      value={primaryValue}
      onChange={onPrimaryChange}
      stretch
      ariaLabel={primaryAriaLabel}
    />

    {showScrollHint && <ScrollHint />}

    {(showSearch || secondaryOptions) && (
      <div className="filter-bar__row">
        {showSearch && (
          <SearchInput
            variant={searchVariant}
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Buscar post..."
          />
        )}

        {secondaryOptions && (
          <SegmentedControl
            options={secondaryOptions}
            value={secondaryValue}
            onChange={onSecondaryChange}
            ariaLabel={secondaryAriaLabel}
          />
        )}
      </div>
    )}

    {showScrollHint && (showSearch || secondaryOptions) && <ScrollHint />}
  </div>
);

export default FilterBar;
