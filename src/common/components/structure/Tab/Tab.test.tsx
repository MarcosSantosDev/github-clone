import * as React from 'react';

import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  it('should have the active class', () => {
    const { getByTestId } = renderWithProvider(
      <Tab {...defaultValues} tabActive data-testid="tab" />,
    );

    const element = getByTestId('tab');

    expect(element).toHaveClass('active');
  });

  it('should not have the active class', () => {
    const { getByTestId } = renderWithProvider(
      <Tab {...defaultValues} data-testid="tab" />,
    );

    const element = getByTestId('tab');

    expect(element).not.toHaveClass('active');
  });

  it('should render the svg icon', () => {
    const { getByTestId } = renderWithProvider(
      <Tab {...defaultValues} data-testid="tab" />,
    );

    const element = getByTestId('tab');

    expect(element).toContainHTML('</svg>');
  });

  it('should return clicked tab', () => {
    const onClickTabMockCallback = jest.fn((tabIdentifier: string) => {
      return tabIdentifier;
    });

    const { getByTestId } = renderWithProvider(
      <Tab
        {...defaultValues}
        onClickTab={onClickTabMockCallback}
        data-testid="tab"
      />,
    );

    const element = getByTestId('tab');

    userEvent.click(element);

    const { calls, results } = onClickTabMockCallback.mock;

    expect(calls.length).toBe(1);
    expect(results[0].value).toBe(defaultValues.tabIdentifier);
  });
});
