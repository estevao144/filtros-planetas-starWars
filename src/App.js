import React from 'react';
import AllFilters from './page/AllFilters';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <AllFilters />
      <Table />
    </Provider>
  );
}
export default App;
