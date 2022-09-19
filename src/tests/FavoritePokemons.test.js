import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testes do requisito 3 - componente "Favorite"', () => {
  it('Verifica se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favoriteLink);
    const mensagem = screen.getByText(/no favorite pokemon found/i);
    expect(mensagem).toBeInTheDocument();
  });
});
