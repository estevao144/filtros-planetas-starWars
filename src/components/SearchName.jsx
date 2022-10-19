import React, { useContext } from 'react';
import myContext from '../context/MyContext';

function SearchName() {
  const { handleSearchChange } = useContext(myContext);
  return (

    <div>
      <h1> Star Wars Busca: </h1>
      <input
        placeholder="Search planet"
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => handleSearchChange(target.value) }
      />
      {/* <form>
        <select
          id="column"
          data-testid="column-filter"
          onChange={ ({ target }) => (
            handleFilterChange(target.id, target.value)
          ) }
        >
          {
            columns.map((column) => (
              <option
                key={ column }
              >
                { column }
              </option>
            ))
          }
        </select>
        <select
          id="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => (
            handleFilterChange(target.id, target.value)
          ) }
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
          onChange={ ({ target }) => (
            handleFilterChange(target.id, target.value)
          ) }
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ handleFilterClick }
        >
          Filtrar
        </button>
      </form> */}
    </div>
  );
}

export default SearchName;
