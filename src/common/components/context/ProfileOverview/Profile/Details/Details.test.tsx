import { render, screen, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Details from './Details';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

const user = {
  company: 'ioasys',
  blog: 'https://www.linkedin.com/in/marcossantosdev',
  location: 'Belo Horizonte - MG',
  email: null,
  followers: 34,
  following: 54,
};

describe('<Details />', () => {
  it('should render in the document', () => {
    renderWithTheme(
      <Details
        company={user.company}
        blog={user.blog}
        location={user.location}
        email={user.email}
        followers={user.followers}
        following={user.following}
      />,
    );

    const elementCompany = screen.getByText(user.company);
    const elementBlog = screen.getByText(user.blog);
    const elementLocation = screen.getByText(user.location);
    const elementFollowers = screen.getByText(user.followers);
    const elementFollowing = screen.getByText(user.following);

    expect(elementCompany).toBeTruthy();
    expect(elementBlog).toBeTruthy();
    expect(elementLocation).toBeTruthy();
    expect(elementFollowers).toBeTruthy();
    expect(elementFollowing).toBeTruthy();
  });
});
