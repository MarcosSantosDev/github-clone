import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ApplicationWrapper from '@/common/components/context/ApplicationWrapper/ApplicationWrapper';
import GlobalFooter from '@/common/components/context/GlobalFooter/GlobalFooter';
import GlobalNavbar from '@/common/components/context/GlobalNavbar/GlobalNavbar';
import { NoMatch, NotFoundPeople, ProfileOverview } from '@/pages';

export const MainRoutes = () => {
  return (
    <Router>
      <ApplicationWrapper>
        <GlobalNavbar />
        <Routes>
          <Route path="/" element={<NoMatch />} />
          <Route path="/github" element={<NotFoundPeople />} />
          <Route path="/github/:profile" element={<ProfileOverview />} />
          <Route path="/not-found" element={<NotFoundPeople />} />
          <Route path="*" element={<NotFoundPeople />} />
        </Routes>
        <GlobalFooter />
      </ApplicationWrapper>
    </Router>
  );
};
