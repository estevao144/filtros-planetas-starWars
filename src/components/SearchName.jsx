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
    </div>
  );
}

export default SearchName;
