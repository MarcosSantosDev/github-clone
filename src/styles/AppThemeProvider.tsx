import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './global-styles';

export const AppThemeProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider theme={theme}>
      {children} <GlobalStyles />
    </ThemeProvider>
  );
};
