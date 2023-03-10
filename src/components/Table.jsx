import React, { useContext } from 'react';
import myContext from '../context/MyContext';

function renderColunas() {
  const colunas = ['Name', 'Rotation Period', 'Orbital Period',
    ' Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL'];
  return (
    <thead>
      <tr>
        { colunas.map((coluna) => (
          <th key={ coluna }>
            { coluna }
          </th>
        ))}
      </tr>
    </thead>
  );
}

function Table() {
  const { planets, search } = useContext(myContext);
  console.log();
  return (

    <table>

      { renderColunas() }

      <tbody data-testid="table">
        {planets.length > 0 && (
          planets.filter((planet) => (
            planet.name.toLowerCase().includes(search.filterByName.name)
          )).map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>

          )))}
      </tbody>
    </table>

  );
}

export default Table;
