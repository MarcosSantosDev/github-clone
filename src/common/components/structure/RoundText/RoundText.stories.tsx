import { Meta, StoryObj } from '@storybook/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { RoundText } from './RoundText';
import type { RoundTextProps } from './RoundText';

export default {
  title: 'Components/Structure/RoundText',
  component: RoundText,
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
    type: 'text',
    variant: 'primary',
    spacing: '1',
  },
  argTypes: {
    content: {
      type: 'string',
      name: 'Content',
      defaultValue: 'Public',
      description: 'Property to control content of component',
    },
    linkURL: {
      type: 'string',
      name: 'Link URL',
      defaultValue: '/',
      description: 'Property to control url used by link variant',
    },
    type: {
      type: 'string',
      name: 'Type',
      defaultValue: 'text',
      description: 'Property to control type of component',
      control: 'inline-radio',
      options: ['text', 'link'],
    },
    variant: {
      type: 'string',
      name: 'Variant',
      defaultValue: 'text',
      description: 'Property to control variant of component',
      control: 'inline-radio',
      options: ['primary', 'secondary', 'success'],
    },
    spacing: {
      type: 'string',
      name: 'Spacing(left and right)',
      defaultValue: 'text',
      description: 'Property to control spacing left and right of component',
      control: 'inline-radio',
      options: ['1', '2'],
    },
  },
} as Meta<RoundTextProps>;

export const Default: StoryObj<RoundTextProps> = {
  args: {},
};
