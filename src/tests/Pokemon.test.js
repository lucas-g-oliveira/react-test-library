import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 6 - componente <Pokemon.js />', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    const pokemonName = screen.getAllByTestId('pokemon-name');
    expect(pokemonName).toHaveLength(1);
  });

  it(`Testa se o card do pokémon indicado na Pokédex contém um link de navegação para
  exibirdetalhes deste pokémon`, () => {
    const linkMoreInfo = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreInfo).toBeInTheDocument();
  });
});
