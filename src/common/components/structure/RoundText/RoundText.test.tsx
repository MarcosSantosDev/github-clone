import * as React from 'react';

import { render, screen, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { RoundText } from './RoundText';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<RoundText />', () => {
  it('should contains in the document', () => {
    renderWithTheme(
      <RoundText
        data-testid="round-text-test"
        content="Public"
        type="text"
        variant="primary"
      />,
    );

    const element = screen.getByTestId('round-text-test');

    expect(element).toBeInTheDocument();
  });

  it('should find element by content', () => {
    renderWithTheme(
      <RoundText
        content="Content of component"
        type="text"
        variant="primary"
      />,
    );

    const realCaseElement = screen.getByText(/Content of component/i);
    const falsyCaseElement = screen.queryByText(/Content of component 2/i);

    expect(realCaseElement).toBeTruthy();
    expect(falsyCaseElement).toBeFalsy();
  });
});
