import * as React from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Tab from './Tab';
import type { TabProps } from './Tab';

const renderWithProvider = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(<AppThemeProvider>{ui}</AppThemeProvider>, options);
};

const defaultValues: TabProps = {
  tabIdentifier: 'repositories',
  iconName: 'library',
  label: 'Repositories',
  counter: 38,
  tabActive: false,
  onClickTab: () => {
    //
  },
};

describe('<Tab />', () => {
  it('should be in the document', () => {
    const element = renderWithProvider(<Tab {...defaultValues} />);

    expect(element).toBeTruthy();
  });
});
