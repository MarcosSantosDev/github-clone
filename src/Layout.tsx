import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function GlobalNav() {
  return <div />;
}

function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <BrowserRouter>
      <GlobalNav />
      <main>
        <MyApp />
      </main>
    </BrowserRouter>
  );
}

export default Layout;
