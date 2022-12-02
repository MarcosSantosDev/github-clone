import { render, RenderOptions, screen } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Projects from './Projects';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Projects />', () => {
  it('should be in the document', () => {
    renderWithTheme(<Projects />);

    const element = screen.getByText('Projects');
    expect(element).toBeInTheDocument();
  });
});
