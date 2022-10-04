import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalNavBar from './common/components/context/GlobalNavBar/GlobalNavBar';
import { NotFoundPeople } from './pages';

function Layout() {
  return (
    <BrowserRouter>
      <GlobalNavBar />
      <main>
        <Routes>
          <Route path="/" element={<NotFoundPeople />}>
            <Route index element={<NotFoundPeople />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Layout;
