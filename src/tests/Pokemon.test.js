import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 6 - componente <Pokemon.js />', () => {
  beforeEach(() => renderWithRouter(<App />));

  it('Testa o atributo "alt" do pokemon', () => {
    const notFoundPage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i });
    expect(notFoundPage).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
