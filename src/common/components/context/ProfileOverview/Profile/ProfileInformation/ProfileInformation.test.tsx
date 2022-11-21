import { render, screen, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import ProfileInformation from './ProfileInformation';

const information = {
  avatar_url: 'https://avatars.githubusercontent.com/u/26147340?v: 4',
  name: 'Marcos Adriano Ferreira Dos Santos,',
  login: 'MarcosSantosDev',
  bio: 'Frontend Engineer',
};

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<ProfileInformation />', () => {
  it('should render in the document', () => {
    renderWithTheme(
      <ProfileInformation
        {...information}
        onEditProfile={() => {
          //
        }}
      />,
    );

    const elementByImg = screen.getByRole('img');
    const elementByName = screen.getByText(information.name);
    const elementByLogin = screen.getByText(information.login);
    const elementByBio = screen.getByText(information.bio);

    expect(elementByImg).toHaveAttribute('src', information.avatar_url);
    expect(elementByName).toBeInTheDocument();
    expect(elementByLogin).toBeInTheDocument();
    expect(elementByBio).toBeInTheDocument();
  });
});
