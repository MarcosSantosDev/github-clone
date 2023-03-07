import React from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ReactDOM from 'react-dom/client';

import queryClient from '@/services/queryClient';

import { MainRoutes } from './router';
import { AppThemeProvider } from './styles/AppThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppThemeProvider>
  </React.StrictMode>,
);
