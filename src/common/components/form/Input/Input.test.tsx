import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
  it('should contains in the document', () => {
    render(<Input type="text" data-testid="input-text" />);

    const element = screen.getByTestId('input-text');

    expect(element).toBeInTheDocument();
  });

  it('should contain the specified value', () => {
    render(<Input type="text" data-testid="input-text" />);

    const inputElement = screen.getByTestId<HTMLInputElement>('input-text');

    const textValue = 'MarcosSantosDev';

    fireEvent.change(inputElement, { target: { value: textValue } });

    expect(inputElement.value).toBe(textValue);
  });
});
