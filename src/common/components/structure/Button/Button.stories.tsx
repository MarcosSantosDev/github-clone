import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Button } from './Button';
import { buttonSizes } from './Button.styles';
import type { ButtonProps } from './Button.types';

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
    variant: 'primary',
  },
  argTypes: {
    children: {
      type: 'string',
      name: 'Label',
      description: 'Property to add label',
      defaultValue: 'Click me!',
    },
    fullWidth: {
      type: 'boolean',
      name: 'Full width',
      defaultValue: false,
      description: 'Property to active full with button',
      control: 'boolean',
      options: [true, false],
    },
    size: {
      type: 'string',
      name: 'Size',
      defaultValue: 'small',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: Object.keys(buttonSizes),
    },
    variant: {
      type: 'string',
      name: 'Variant',
      defaultValue: 'primary',
      description: 'Property to control size button',
      control: 'inline-radio',
      options: ['primary', 'secondary', 'success'],
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {},
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    icon: {
      name: 'sortDown',
      side: 'right',
      size: 10,
    },
  },
};
