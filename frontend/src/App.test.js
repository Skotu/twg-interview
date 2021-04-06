import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('App', () => {
  test('logo text is on the screen', () => {
    render(<App />)

    const textElement = screen.getByText('Klickrent');
    expect(textElement).toBeInTheDocument();
  })

  test('logo text has correct class', () => {
    render(<App />)

    const textElement = screen.getByText('Klickrent');
    expect(textElement).toHaveClass('App__header');
  })
});

