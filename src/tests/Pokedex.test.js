import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 5, componente Pokedex', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
    const pokemonsHeading = screen.getByRole('heading', {
      level: 2, name: /encountered pokémons/i });
    expect(pokemonsHeading).toBeInTheDocument();
  });

  it('Testa se botão tem o texto Próximo pokémon', () => {
    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    const firstImage = screen.getByRole('img').getAttribute('alt');
    userEvent.click(buttonNext);
    const secondImage = screen.getByRole('img').getAttribute('alt');
    const test = (firstImage !== secondImage);

    expect(test).toBeTruthy();
    expect(buttonNext).toBeInTheDocument();
  });

  it(`Testa se o primeiro pokémon da lista deve ser mostrado ao clicar no botão,
  se estiver no último pokémon da lista`, () => {
    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    const imageFirst = screen.getByRole('img').getAttribute('alt');
    const listPokemon = [];
    let repeat = false;

    while (!repeat) {
      userEvent.click(buttonNext);
      const imageOthers = screen.getByRole('img').getAttribute('alt');
      if (listPokemon.some((e) => e === imageFirst)) {
        repeat = true;
      }
      listPokemon.push(imageOthers);
    }

    expect(repeat).toBeTruthy();
  });

  it('Testa se é mostrado apenas um pokemom por vez', () => {
    const pokemonRendered = screen.getAllByRole('img');
    expect(pokemonRendered).toHaveLength(1);
  });

  it('Testa se um botão de filtragem para cada tipo de pokémon, sem repetição', () => {
    const filterButons = screen.getAllByTestId('pokemon-type-button');
    const hasParam = filterButons.every((e) => e.textContent !== '');
    expect(hasParam).toBeTruthy();
  });

  it('Teste se a Pokédex tem o botão de resetar o filtro e se ele é clicavel', () => {
    const cleanFilter = screen.getByRole('button', { name: /all/i });
    userEvent.click(cleanFilter);
    expect(cleanFilter).toBeInTheDocument();
  });
});
