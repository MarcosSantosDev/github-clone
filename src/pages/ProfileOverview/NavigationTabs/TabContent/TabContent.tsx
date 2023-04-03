import * as React from 'react';

import { useTab } from '@/common/hooks';

import { getTabActive } from '../../shared/navigationTabs';
import type { TabIdentifier } from '../../shared/navigationTabs';

const Tabs: Record<
  TabIdentifier,
  React.LazyExoticComponent<() => JSX.Element>
> = {
  overview: React.lazy(() => import('./Overview/Overview')),
  repositories: React.lazy(() => import('./Repositories/Repositories')),
  projects: React.lazy(() => import('./Projects/Projects')),
  packages: React.lazy(() => import('./Packages/Packages')),
  stars: React.lazy(() => import('./Stars/Stars')),
};

const TabContent = () => {
  const { tab } = useTab();

  const tabActive = getTabActive(tab);

  const TabComponent = Tabs[tabActive];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TabComponent />
    </React.Suspense>
  );
};

export default TabContent;
