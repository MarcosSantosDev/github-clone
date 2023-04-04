import { render, RenderOptions, screen } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Footer from './Footer';

const links = [
  'Terms',
  'Privacy',
  'Security',
  'Status',
  'Contact GitHub',
  'Docs',
  'Pricing',
  'API',
  'Training',
  'Blog',
  'About',
];

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

describe('<Footer />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Footer />);

    const copyright = screen.getByText('© 2022 GitHub, Inc.');
    expect(copyright).toBeInTheDocument();

    links.forEach(link => {
      const elementLink = screen.getByText(link);
      expect(elementLink).toBeInTheDocument();
    });
  });
});
