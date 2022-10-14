import * as React from 'react';

import { render, screen, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import { Img } from './Img';

const renderWithProvider = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

describe('<Img />', () => {
  it('should be in the document', () => {
    renderWithProvider(<Img src="" alt="image description" />);

    const element = screen.getByAltText('image description');

    expect(element).toBeInTheDocument();
  });
});
