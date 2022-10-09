import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Input } from './Input';
import type { InputProps } from './Input';

export default {
  title: 'Components/Form/Input',
  component: Input,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
  args: {},
  argTypes: {
    placeholder: {
      type: 'string',
      description: 'Input placeholder',
      defaultValue: 'I am a placeholder...',
    },
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
