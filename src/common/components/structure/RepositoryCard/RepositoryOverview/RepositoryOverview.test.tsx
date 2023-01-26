import * as React from 'react';

import { render, screen, RenderOptions } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { repositoryMocked } from './mock';
import RepositoryOverview from './RepositoryOverview';

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

describe('<RepositoryOverview />', () => {
  it('should contains in the document', () => {
    renderWithTheme(
      <RepositoryOverview
        data-testid="card-test"
        repository={repositoryMocked}
      />,
    );

    const element = screen.getByTestId('card-test');

    expect(element).toBeInTheDocument();
  });

  it('should find element by text', () => {
    renderWithTheme(
      <RepositoryOverview
        data-testid="card-test"
        repository={repositoryMocked}
      />,
    );

    const element = screen.getByText(repositoryMocked.name);

    expect(element).toBeTruthy();
  });
});
