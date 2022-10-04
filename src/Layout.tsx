import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalNavBar from './common/components/context/GlobalNavBar/GlobalNavBar';
import { NoMatch, NotFoundPeople, ProfileOverview } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NoMatch title="No Match!" />,
  },
  {
    path: '/github',
    element: <NoMatch title="Go to my profile!" />,
  },
  {
    path: '/github/:profileName',
    element: <ProfileOverview />,
  },
  {
    path: '/not-found',
    element: <NotFoundPeople />,
  },
  {
    path: '*',
    element: <NotFoundPeople />,
  },
]);

function Layout() {
  return (
    <main>
      <GlobalNavBar />
      <RouterProvider router={router} />
    </main>
  );
}

export default Layout;
