import { render, RenderOptions, screen } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Repositories from './Repositories';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Repositories />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Repositories />);

    const element = screen.getByText('Repositories');
    expect(element).toBeInTheDocument();
  });
});
