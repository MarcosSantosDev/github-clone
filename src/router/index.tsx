import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/common/components/context';
import { NoMatch, NotFoundPeople, ProfileOverview } from '@/pages';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<NoMatch />} />
        <Route path="/github" element={<NotFoundPeople />} />
        <Route path="/github/:username" element={<ProfileOverview />} />
        <Route path="/not-found" element={<NotFoundPeople />} />
        <Route path="*" element={<NotFoundPeople />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
