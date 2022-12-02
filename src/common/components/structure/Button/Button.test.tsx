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

  it('should have in its style a width of 100%', () => {
    renderWithTheme(
      <Button type="button" fullWidth data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toHaveStyle({
      width: '100%',
    });
  });

  it('should keep the "small" style when informing the "size" property as "small"', () => {
    renderWithTheme(
      <Button type="button" size="small" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toHaveStyle({
      padding: '4px 6px',
    });
  });

  it('should keep the "medium" style when informing the "size" property as "medium"', () => {
    renderWithTheme(
      <Button type="button" size="medium" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toHaveStyle({
      padding: '8px 12px',
    });
  });

  it('should keep the "large" style when informing the "size" property as "large"', () => {
    renderWithTheme(
      <Button type="button" size="large" data-testid="button-test">
        Click me!
      </Button>,
    );

    const element = screen.getByTestId('button-test');

    expect(element).toHaveStyle({
      padding: '16px 32px',
    });
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
