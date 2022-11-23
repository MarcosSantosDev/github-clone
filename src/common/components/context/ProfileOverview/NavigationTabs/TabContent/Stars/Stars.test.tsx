import { render, RenderOptions, screen } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Stars from './Stars';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Stars />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Stars />);

    const element = screen.getByText('Stars');
    expect(element).toBeInTheDocument();
  });
});
