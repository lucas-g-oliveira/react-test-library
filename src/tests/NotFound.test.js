import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testes do requisito 4, componente "NotFound"', () => {
  it(`Testa se a página contém um heading h2 com o texto Page requested
  not found`, () => {
    renderWithRouter(<NotFound />);
    const notFoundPage = screen
      .getByRole('heading', { level: 2, name: /page requested not found/i });
    expect(notFoundPage).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem', async () => {
    renderWithRouter(<NotFound />);
    const notFoundPage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(notFoundPage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
