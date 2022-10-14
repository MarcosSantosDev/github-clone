import * as React from 'react';

import {
  render,
  screen,
  fireEvent,
  RenderOptions,
} from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Button } from './Button';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

// adicionar contexto de tema da aplicação para funcionar
describe('<Button />', () => {
  it('should contains in the document', () => {
    renderWithTheme(
      <Button type="button" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toBeInTheDocument();
  });

  it('should display the text in the component', () => {
    renderWithTheme(
      <Button type="button" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element.innerHTML).toEqual('Click me!');
  });

  it('must execute the handleClick function 1 time when calling the click event', () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <Button type="button" data-testid="button-test" onClick={handleClick}>
        Click me!
      </Button>,
    );

    const buttonElement = screen.getByTestId<HTMLButtonElement>('button-test');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
