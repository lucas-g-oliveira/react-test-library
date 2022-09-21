import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste do componente <PokemonDetails.js />', () => {
  renderWithRouter(<App />);
  const linkMoreDeatails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(linkMoreDeatails);

  const pokFavorited = screen.getByText(/pokémon favoritado\?/i);
  const allH2 = screen.getAllByRole('heading', { level: 2 })
    .every((e) => e.textContent !== '');
  const summaryP = screen.getByText(/this intelligent pokémon roasts hard/i);
  const mapsSRC = screen.getAllByRole('img')
    .every((e) => e.getAttribute('src') !== '' && e.getAttribute('alt') !== '');

  expect(mapsSRC).toBeTruthy();
  expect(allH2).toBeTruthy();
  expect(summaryP).toBeInTheDocument();
  expect(pokFavorited).toBeInTheDocument();
});
