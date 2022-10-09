import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Button, buttonSizes } from './Button';
import type { ButtonProps } from './Button';

export default {
  title: 'Components/Structure/Button',
  component: Button,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
  args: {
    fullWidth: false,
    size: 'small',
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Property to add label',
      defaultValue: 'Click me!',
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
      description: 'Property to active full with button',
      control: 'inline-radio',
      options: [true, false],
    },
    size: {
      type: 'string',
      defaultValue: 'small',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: Object.keys(buttonSizes),
    },
  },
} as Meta<ButtonProps>;

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
};

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'medium',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'large',
  },
};
