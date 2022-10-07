import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
  RenderOptions,
} from '@testing-library/react';
import { Button } from './Button';
import { AppThemeProvider } from '../../../../styles/AppThemeProvider';

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

  it('should contain the specified value', () => {
    const handleClick = jest.fn();

    renderWithTheme(
      <Button type="button" data-testid="button-test" onClick={handleClick}>
        Click me!
      </Button>,
    );

    const buttonElement = screen.getByTestId<HTMLButtonElement>('button-test');

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
