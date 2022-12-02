import {
  render,
  RenderOptions,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import TabNavigation from './TabNavigation';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(
    <AppThemeProvider>
      <Router>
        {ui}
        <div style={{ height: '50000px' }}>
          <h2>test</h2>
        </div>
      </Router>
    </AppThemeProvider>,
    options,
  );
};

describe('<TabNavigation />', () => {
  it('should be in the document', () => {
    renderWithTheme(<TabNavigation />);

    const element = screen.getByTestId('tab-navigation');

    expect(element).toBeInTheDocument();
  });

  it('should be not have "profile-navigation-visible" class', async () => {
    const { container } = renderWithTheme(<TabNavigation />);

    const element = container.querySelector('#profile-navigation');

    expect(element).not.toHaveClass('profile-navigation-visible');
  });
});
