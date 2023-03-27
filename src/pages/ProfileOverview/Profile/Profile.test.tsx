import { render, screen, RenderOptions } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { user } from '../mock';
import Profile from './Profile';

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

describe('<Profile />', () => {
  it('should render in the document', () => {
    renderWithTheme(
      <Profile
        information={{
          avatar_url: user.avatar_url,
          login: 'Test',
          name: 'Test',
          bio: 'Test',
        }}
        details={{
          login: 'MarcosSantosDev',
          blog: 'Test',
          company: 'Test',
          email: 'test@test.com',
          followers: 10,
          following: 10,
          location: 'Belo horizonte',
        }}
      />,
    );

    const elementEmail = screen.getByText('test@test.com');

    expect(elementEmail).toBeTruthy();
  });
});
