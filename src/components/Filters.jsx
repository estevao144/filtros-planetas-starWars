import React, { useContext } from 'react';
import myContext from '../context/MyContext';

function Filters() {
  const {
    handleFilterChange,
    handleFilterClick,
    removeFilter,
    filters,
    totalFilters,
    columns,
  } = useContext(myContext);
  const { filterByNumericValues } = totalFilters;
  console.log(totalFilters);
  return (
    <>
      <form>
        <select
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => handleFilterChange(target.id, target.value) }
        >
          {columns.map((column) => (
            <option key={ column }>{column}</option>
          ))}
        </select>
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => handleFilterChange(target.id, target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          id="value"
          type="number"
          data-testid="value-filter"
          value={ filters.filterByNumericValues.value }
          onChange={ ({ target }) => handleFilterChange(target.id, target.value) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilterClick }
        >
          Filtrar
        </button>
      </form>
      <div>
        {filterByNumericValues.map((numericValues, index) => (
          <div key={ index }>
            {numericValues.column}
            {numericValues.comparison}
            {numericValues.value}
            <button
              type="button"
              name={ index }
              onClick={ (event) => removeFilter(event) }
            >
              excluir
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Filters;
