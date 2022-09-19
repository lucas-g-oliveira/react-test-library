import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 1', () => {
  it('Testa se o 1º link possui o texto "Home"', () => {
    renderWithRouter(<App />);
    const linkNavigator = screen.getAllByRole('link');
    expect(linkNavigator[0]).toHaveTextContent('Home');
    expect(linkNavigator[1]).toHaveTextContent('About');
    expect(linkNavigator[2]).toHaveTextContent('Favorite Pokémons');
  });

  it(`Testa se a aplicação é redirecionada para a página inicial, na URL / 
    ao clicar no link Home da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it(`Teste se a aplicação é redirecionada para a página de About, na URL /about,
    ao clicar no link About da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it(`Teste se a aplicação é redirecionada para a página de Pokémons Favoritados,
    na URL /favorites,ao clicar no link Favorite Pokémons da barra de navegação`, () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it(`Teste se a aplicação é redirecionada para a página Not Found ao
   entrar em uma URL desconhecida.`, () => {
    const { history } = renderWithRouter(<App />);
    act(() => history.push('xablau'));
    const notFoundPage = screen
      .getByRole('heading', { name: /page requested not found/i });
    expect(notFoundPage).toBeInTheDocument();
  });
});

/* npx stryker run ./stryker/nomeDoArquivo.conf.json */
