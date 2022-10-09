import * as React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './global-styles';
import theme from './theme';

export const AppThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={theme}>
      {children} <GlobalStyles />
    </ThemeProvider>
  );
};
