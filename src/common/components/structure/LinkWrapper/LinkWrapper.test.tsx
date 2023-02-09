import * as React from 'react';

import { render, screen, RenderOptions } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { LinkWrapper } from './LinkWrapper';

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

describe('<LinkWrapper />', () => {
  it('should contains in the document', () => {
    renderWithTheme(
      <LinkWrapper to="/" data-testid="link-wrapper-test">
        <span>Go to home</span>
      </LinkWrapper>,
    );

    const element = screen.getByTestId('link-wrapper-test');

    expect(element).toBeInTheDocument();
  });
});
