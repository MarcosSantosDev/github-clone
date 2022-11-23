import { render, RenderOptions, screen } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Overview from './Overview';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Overview />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Overview />);

    const element = screen.getByText('Overview');
    expect(element).toBeInTheDocument();
  });
});
