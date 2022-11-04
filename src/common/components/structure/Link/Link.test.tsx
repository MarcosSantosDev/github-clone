import * as React from 'react';

import { render, screen, RenderOptions } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Link } from './Link';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(
    <AppThemeProvider>
      <Router>{ui}</Router>
    </AppThemeProvider>,
    options,
  );
};

describe('<Link />', () => {
  it('should contains in the document', () => {
    renderWithTheme(
      <Link to="/" data-testid="link-test">
        Go to home
      </Link>,
    );

    const element = screen.getByTestId('link-test');

    expect(element).toBeInTheDocument();
  });
});
