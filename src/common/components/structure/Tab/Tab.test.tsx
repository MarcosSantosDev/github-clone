import * as React from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Tab from './Tab';
import type { TabOption } from './Tab';
import TabProvider from './TabProvider';

const renderWithProvider = (
  ui: React.ReactNode,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  return render(
    <AppThemeProvider>
      <TabProvider>{ui}</TabProvider>
    </AppThemeProvider>,
    options,
  );
};

const defaultValues: TabOption = {
  tabIdentifier: 'repositories',
  iconName: 'library',
  label: 'Repositories',
  counter: 38,
};

describe('<Tab />', () => {
  it('should be in the document', () => {
    const element = renderWithProvider(<Tab {...defaultValues} />);

    expect(element).toBeTruthy();
  });
});
