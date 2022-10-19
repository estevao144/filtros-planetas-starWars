import React from 'react';
import SearchName from './components/SearchName';
import Table from './components/Table';
import Provider from './context/MyProvider';

function App() {
  return (
    <Provider>
      <SearchName />
      <Table />
    </Provider>
  );
}
export default App;
