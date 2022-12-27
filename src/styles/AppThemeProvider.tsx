import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './global-styles';
import { blackTheme } from './themes';

export const AppThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={blackTheme}>
      {children} <GlobalStyles />
    </ThemeProvider>
  );
};
