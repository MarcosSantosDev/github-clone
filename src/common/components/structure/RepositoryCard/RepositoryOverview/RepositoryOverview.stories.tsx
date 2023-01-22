import { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { repositoryMocked } from './mock';
import RepositoryOverviewComponent, {
  formatRepositoryToOverviewComponent,
} from './RepositoryOverview';
import type { RepositoryOverviewProps } from './RepositoryOverview';

export default {
  title: 'Components/Structure/RepositoryCard',
  component: RepositoryOverviewComponent,
  decorators: [
    Story => {
      return (
        <AppThemeProvider>
          <Router>{Story()}</Router>
        </AppThemeProvider>
      );
    },
  ],
  args: {
    repository: formatRepositoryToOverviewComponent(repositoryMocked),
  },
  argTypes: {},
} as Meta<RepositoryOverviewProps>;

export const RepositoryOverview: StoryObj<RepositoryOverviewProps> = {
  args: {},
};
