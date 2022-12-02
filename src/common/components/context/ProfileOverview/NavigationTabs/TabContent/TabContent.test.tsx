import { render, RenderOptions, screen } from '@testing-library/react';

import { useTab } from '@/common/hooks';
import { AppThemeProvider } from '@/styles/AppThemeProvider';

import TabContent from './TabContent';

const renderWithTheme = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};
jest.mock('@/common/hooks');

const mockUseTab = useTab as jest.MockedFunction<typeof useTab>;

describe('<TabContent />', () => {
  it('should show the contents of the "Overview" tab', async () => {
    mockUseTab.mockReturnValue({
      tab: 'overview',
      setTab: () => {
        //
      },
    });
    renderWithTheme(<TabContent />);

    const element = await screen.findByText('Overview');
    expect(element).toBeInTheDocument();
  });

  it('should show the contents of the "Repositories" tab', async () => {
    mockUseTab.mockReturnValue({
      tab: 'repositories',
      setTab: () => {
        //
      },
    });

    renderWithTheme(<TabContent />);

    const element = await screen.findByText('Repositories');
    expect(element).toBeInTheDocument();
  });

  it('should show the contents of the "Projects" tab', async () => {
    mockUseTab.mockReturnValue({
      tab: 'projects',
      setTab: () => {
        //
      },
    });

    renderWithTheme(<TabContent />);

    const element = await screen.findByText('Projects');
    expect(element).toBeInTheDocument();
  });

  it('should show the contents of the "Packages" tab', async () => {
    mockUseTab.mockReturnValue({
      tab: 'packages',
      setTab: () => {
        //
      },
    });

    renderWithTheme(<TabContent />);

    const element = await screen.findByText('Packages');
    expect(element).toBeInTheDocument();
  });

  it('should show the contents of the "Stars" tab', async () => {
    mockUseTab.mockReturnValue({
      tab: 'stars',
      setTab: () => {
        //
      },
    });

    renderWithTheme(<TabContent />);

    const element = await screen.findByText('Stars');
    expect(element).toBeInTheDocument();
  });
});
