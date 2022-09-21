import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 6 - componente <Pokemon.js />', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Testa o atributo "alt" do pokemon', () => {
    const imageName = screen.getByTestId('pokemon-name');
    const imagePokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemomWeight = screen.getByTestId('pokemon-type');

    const linkMoreDeatails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(linkMoreDeatails);
    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(check);
    const favoriteFeedback = screen
      .getByRole('img', { name: /pikachu is marked as favorite/i });

    expect(imagePokemon).not.toHaveAttribute('src', '');
    expect(imagePokemon).not.toHaveAttribute('alt', '');
    expect(favoriteFeedback).not.toHaveAttribute('src', '');
    expect(favoriteFeedback).toBeInTheDocument();
    expect(imageName.textContent).not.toBe('');
    expect(pokemonType.textContent).not.toBe('');
    expect(pokemomWeight.textContent).not.toBe('');
  });
});
