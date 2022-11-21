import React from 'react';

import { renderHook, act } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { useTab } from '../../src/common/hooks';

describe('Hook useTab', () => {
  it('Hook useTab', () => {
    const wrapper = ({ children }: React.PropsWithChildren<unknown>) => (
      <BrowserRouter>{children}</BrowserRouter>
    );

    const { result } = renderHook(() => useTab(), { wrapper });

    act(() => {
      result.current.setTab('tab01');
    });

    expect(result.current.tab).toEqual('tab01');
  });
});
