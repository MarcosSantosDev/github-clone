import { Meta, StoryObj } from '@storybook/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Img } from './Img';

export default {
  title: 'Components/Structure/Image',
  component: Img,
  decorators: [
    Story => {
      return <AppThemeProvider>{Story()}</AppThemeProvider>;
    },
  ],
} as Meta;

export const Default: StoryObj = {
  args: {
    src: 'https://www.google.com/photos/about/static/images/ui/logo-photos.png',
    alt: 'my image',
    width: '100px',
    height: '100px',
  },
};
