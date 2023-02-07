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
    disableHoverUnderline: true,
  },
  argTypes: {
    children: {
      type: 'function',
      name: 'Content(HTML)',
      defaultValue: <span>bold link</span>,
    },
    to: {
      type: 'string',
      name: 'Pathname',
      defaultValue: '/',
    },
    disableHoverUnderline: {
      type: 'boolean',
      name: 'Disable hover underline',
      defaultValue: false,
      description: 'Property to control property text decoration',
      control: 'inline-radio',
      options: [true, false],
    },
  },
};
