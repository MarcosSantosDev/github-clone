import { render, RenderOptions, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Header from './Header';

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

const links = ['Pull requests', 'Issues', 'Marketplace', 'Explore'];

describe('<Header />', () => {
  it('should be all anchor links in the document', () => {
    renderWithTheme(<Header />);

    links.forEach(link => {
      const elementLink = screen.getByText(link);
      expect(elementLink).toBeInTheDocument();
    });
  });
});
