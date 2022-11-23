import { render, RenderOptions, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import GlobalNavbar from './GlobalNavbar';

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

describe('<GlobalNavbar />', () => {
  it('should be in the document', () => {
    renderWithTheme(<GlobalNavbar />);

    links.forEach(link => {
      const elementLink = screen.getByText(link);
      expect(elementLink).toBeInTheDocument();
    });
  });
});
