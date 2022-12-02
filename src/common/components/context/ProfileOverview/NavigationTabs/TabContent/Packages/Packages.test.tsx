import { render, RenderOptions, screen } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Packages from './Packages';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Packages />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Packages />);

    const element = screen.getByText('Packages');
    expect(element).toBeInTheDocument();
  });
});
