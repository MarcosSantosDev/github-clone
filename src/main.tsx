import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import { AppThemeProvider } from './styles/AppThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Layout />
    </AppThemeProvider>
  </React.StrictMode>,
);
