import { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { LinkWrapper } from './LinkWrapper';

export default {
  title: 'Components/Structure/LinkWrapper',
  component: LinkWrapper,
  decorators: [
    Story => {
      return (
        <AppThemeProvider>
          <Router>{Story()}</Router>
        </AppThemeProvider>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {
  args: {
    to: '/',
  },
  argTypes: {
    children: {
      type: 'function',
      name: 'Content(HTML)',
      defaultValue: <span>Go to home</span>,
    },
    to: {
      type: 'string',
      name: 'Pathname',
      defaultValue: '/',
    },
  },
};
