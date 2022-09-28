import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function GlobalNav() {
  return <div />;
}

function Layout() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Layout;
