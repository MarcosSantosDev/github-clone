import { render, screen, RenderOptions } from '@testing-library/react';

import { user } from '@/common/components/context/ProfileOverview/mock';
import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Profile from './Profile';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
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
