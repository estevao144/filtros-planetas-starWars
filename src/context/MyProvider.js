import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import mycontext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState({
    filterName: {
      name: '',
    },
  });

  function handleSearchChange(value) {
    setSearch({
      filterName: {
        name: value,
      },
    });
  }

  async function getPlanets() {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const planetsObj = data.results;
        setPlanets(planetsObj);
      });
  }

  useEffect(() => {
    getPlanets();
  }, []);

  console.log(planets);
  const contextValue = useMemo(
    () => ({ planets, handleSearchChange, search }),
    [planets, search],
  );

  return (
    <mycontext.Provider value={ contextValue }>{children}</mycontext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
