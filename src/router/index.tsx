import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from '@/common/components/context';
import { Home, ProfileOverview } from '@/pages';

const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github/:username" element={<ProfileOverview />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
