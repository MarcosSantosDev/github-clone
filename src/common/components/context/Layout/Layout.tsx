import * as React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { usePageTitle } from '@/common/hooks';
import queryClient from '@/services/queryClient';
import { AppThemeProvider } from '@/styles/AppThemeProvider';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import * as S from './Layout.styles';

function setApplicationTitle(pageTitle: string) {
  if (typeof window !== 'undefined' && pageTitle) {
    document.title = pageTitle;
  }
}

const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  const pageTitle = usePageTitle();

  setApplicationTitle(pageTitle);

  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <S.ApplicationGrid>
          <Header />
          {children}
          <Footer />
        </S.ApplicationGrid>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppThemeProvider>
  );
};

export default Layout;
