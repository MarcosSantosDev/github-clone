import { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Link } from './Link';

export default {
  title: 'Components/Structure/Link',
  component: Link,
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
    size: 'small',
  },
  argTypes: {
    children: {
      type: 'string',
      name: 'Label',
      defaultValue: 'I am a link',
    },
    size: {
      type: 'string',
      name: 'Size',
      defaultValue: 'small',
      description: 'Property to control font size of link',
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    bold: {
      type: 'boolean',
      name: 'Is bold',
      defaultValue: false,
      description: 'Property to control font weight of link',
      control: 'inline-radio',
      options: [true, false],
    },
    disableUnderline: {
      type: 'boolean',
      name: 'Disable underline',
      defaultValue: false,
      description: 'Property to control property text decoration',
      control: 'inline-radio',
      options: [true, false],
    },
  },
};
