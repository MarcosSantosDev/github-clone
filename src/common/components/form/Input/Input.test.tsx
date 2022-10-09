import {
  render,
  screen,
  fireEvent,
  RenderOptions,
} from '@testing-library/react';
import { AppThemeProvider } from '../../../../styles/AppThemeProvider';
import { Input } from './Input';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Input />', () => {
  it('should contains in the document', () => {
    renderWithTheme(<Input type="text" data-testid="input-text" />);

    const element = screen.getByTestId('input-text');

    expect(element).toBeInTheDocument();
  });

  it('should contain the specified value', () => {
    renderWithTheme(<Input type="text" data-testid="input-text" />);

    const inputElement = screen.getByTestId<HTMLInputElement>('input-text');

    const textValue = 'MarcosSantosDev';

    fireEvent.change(inputElement, { target: { value: textValue } });

    expect(inputElement.value).toBe(textValue);
  });
});
