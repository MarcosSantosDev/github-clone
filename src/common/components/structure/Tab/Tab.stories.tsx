import { Meta, StoryObj } from '@storybook/react';

import { icons } from '@/common/icons';
import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Tab from './Tab';
import type { TabProps } from './Tab';

const iconOptions: string[] = icons.map(icon => icon.name);

export default {
  title: 'Components/Structure/Tab',
  component: Tab,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
  args: {
    tabIdentifier: 'repositories',
    iconName: 'library',
    label: 'Repositories',
    counter: 38,
    tabActive: false,
  },
  argTypes: {
    tabIdentifier: {
      type: 'string',
      name: 'Tab identifier',
      defaultValue: 'repositories',
    },
    iconName: {
      type: 'string',
      name: 'Icon name',
      defaultValue: 'library',
      control: 'inline-radio',
      options: iconOptions,
    },
    label: {
      type: 'string',
      name: 'Label',
      defaultValue: 'Repositories',
    },
    counter: {
      type: 'number',
      name: 'Counter',
      defaultValue: 38,
    },
    tabActive: {
      type: 'boolean',
      name: 'Tab active',
      defaultValue: false,
      control: 'inline-radio',
      options: [true, false],
    },
  },
} as Meta<TabProps>;

export const Default: StoryObj<TabProps> = {};
