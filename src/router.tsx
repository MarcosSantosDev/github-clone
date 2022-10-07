import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalNavbar from './common/components/context/GlobalNavbar/GlobalNavbar';
import GlobalFooter from './common/components/context/GlobalFooter/GlobalFooter';
import { NoMatch, NotFoundPeople, ProfileOverview } from './pages';

export const MainRoutes = () => {
  return (
    <Router>
      <GlobalNavbar />
      <Routes>
        <Route path="/" element={<NoMatch title="No Match!" />} />
        <Route path="/github" element={<NotFoundPeople />} />
        <Route path="/github/:profile" element={<ProfileOverview />} />
        <Route path="/not-found" element={<NotFoundPeople />} />
        <Route path="*" element={<NotFoundPeople />} />
      </Routes>
      <GlobalFooter />
    </Router>
  );
};
