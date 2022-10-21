/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import myContext from './MyContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filters, setFilters] = useState({
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  });
  const [totalFilters, setAddFilter] = useState({
    filterByNumericValues: [],
  });
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

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

  useEffect(() => {
    setFilters({
      filterByNumericValues: {
        column: columns[0],
        comparison: 'maior que',
        value: 0,
      } });
  }, [totalFilters]);

  function handleSearchChange(value) {
    setSearch({
      filterByName: {
        name: value,
      },
    });
  }

  function removeFilter(event) {
    const { name } = event.target;
    console.log(name);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFilterChange = (id, value) => {
    setFilters({
      filterByNumericValues: {
        ...filters.filterByNumericValues,
        [id]: value,
      },
    });
  };

  function handleFilterClick() {
    const { column, comparison, value } = filters.filterByNumericValues;
    const filtersArray = [
      ...totalFilters.filterByNumericValues,
      {
        column,
        comparison,
        value,
      },
    ];
    setAddFilter({
      filterByNumericValues: filtersArray,
    });
    const filteredPlanets = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return planet[column] > Number(value);
      }
      if (comparison === 'menor que') {
        return planet[column] < Number(value);
      }
      if (comparison === 'igual a') {
        return planet[column] === value;
      }
      return planet;
    });

    setColumns(columns.filter((element) => element !== column));
    setAddFilter({
      filterByNumericValues: filtersArray,
    });

    setPlanets(filteredPlanets);
  }

  const contextValue = useMemo(
    () => ({
      totalFilters,
      planets,
      search,
      filters,
      columns,
      handleSearchChange,
      handleFilterChange,
      handleFilterClick,
      removeFilter,
    }),
    [
      planets,
      search,
      filters,
      columns,
      handleSearchChange,
      handleFilterChange,
      handleFilterClick,
    ],
  );

  return (
    <myContext.Provider value={ contextValue }>{children}</myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
