import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

test('Teste se aparece Star Wars', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars Busca:/i);
  expect(linkElement).toBeInTheDocument();
});

test('testando renderização', () => {
  render(<App />);
  const filterName = screen.getByTestId(/name-filter/i );
  const collumnFilter = screen.getByTestId(/column-filter/i);
  const comparisonFilter = screen.getByTestId(/comparison-filter/i);
  const valueFilter = screen.getByTestId(/value-filter/i);
  const btnFilter = screen.getByTestId(/button-filter/i);

  expect(filterName).toBeInTheDocument();
  expect(collumnFilter).toBeInTheDocument();
  expect(comparisonFilter).toBeInTheDocument();
  expect(valueFilter).toBeInTheDocument();
  expect(btnFilter).toBeInTheDocument();

});

test('testando se a tabela renderiza', async () => {
  render(<App />);

  const table = await screen.getByTestId(/table/i);
    expect(table).toBeInTheDocument();

    const tatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});     expect(tatooine).toBeInTheDocument();
      
      expect(tatooine).toBeInTheDocument();
   
  
});

test('Testando filtro population', async () => {
  render(<App />);

  const collumnFilter = screen.getByTestId(/column-filter/i);
  const comparisonFilter = screen.getByTestId(/comparison-filter/i);
  const valueFilter = screen.getByTestId(/value-filter/i);
  const btnFilter = screen.getByTestId(/button-filter/i);
  const tatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});     expect(tatooine).toBeInTheDocument();

  userEvent.selectOptions(collumnFilter, 'population');
  userEvent.selectOptions(comparisonFilter, 'menor que');
  userEvent.type(valueFilter, '1000');
  userEvent.click(btnFilter);



  
  const table = screen.getByTestId(/table/i);
  expect(table).toBeInTheDocument();

  
  

});

test('Testando filtro orbital_period', async () => {
  render(<App />);

  const collumnFilter = screen.getByTestId(/column-filter/i);
  const comparisonFilter = screen.getByTestId(/comparison-filter/i);
  const valueFilter = screen.getByTestId(/value-filter/i);
  const btnFilter = screen.getByTestId(/button-filter/i);
  const tatooine = await screen.findByText(/tatooine/i, {}, {timeout: 15000});     expect(tatooine).toBeInTheDocument();
  
  userEvent.selectOptions(collumnFilter, 'orbital_period');
  userEvent.selectOptions(comparisonFilter, 'maior que');
  userEvent.type(valueFilter, 1000);
  userEvent.click(btnFilter);

  const table = screen.getByTestId(/table/i);
  expect(table).toBeInTheDocument();

});

test('Testando a filtragem por nome', async () => {
  render(<App />);
  const filterName = screen.getByTestId('name-filter');
  userEvent.type(filterName, 'tatooine');


  
  });

