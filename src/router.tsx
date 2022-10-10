import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalNavbar, GlobalFooter } from '@/common/components/context';
import { GlobalGrid } from '@/common/components/structure';

import { NoMatch, NotFoundPeople, ProfileOverview } from './pages';

export const MainRoutes = () => {
  return (
    <Router>
      <GlobalGrid>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<NoMatch title="No Match!" />} />
          <Route path="/github" element={<NotFoundPeople />} />
          <Route path="/github/:profile" element={<ProfileOverview />} />
          <Route path="/not-found" element={<NotFoundPeople />} />
          <Route path="*" element={<NotFoundPeople />} />
        </Routes>
        <GlobalFooter />
      </GlobalGrid>
    </Router>
  );
};
