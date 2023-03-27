import { TabOption } from '@/common/components/structure/Tab/Tab';

export type TabIdentifier =
  | 'overview'
  | 'repositories'
  | 'projects'
  | 'packages'
  | 'stars';

export const tabOptions: TabOption<TabIdentifier>[] = [
  { tabIdentifier: 'overview', iconName: 'openPreview', label: 'Overview' },
  {
    tabIdentifier: 'repositories',
    iconName: 'library',
    label: 'Repositories',
  },
  { tabIdentifier: 'projects', iconName: 'graph', label: 'Projects' },
  { tabIdentifier: 'packages', iconName: 'extensions', label: 'Packages' },
  {
    tabIdentifier: 'stars',
    iconName: 'starfull',
    label: 'Stars',
  },
];

export function getTabActive(searchTabIdentifier: string | null) {
  if (searchTabIdentifier !== null) {
    const tab = tabOptions.find(({ tabIdentifier }) => {
      return tabIdentifier === searchTabIdentifier;
    });

    if (tab) {
      return tab.tabIdentifier;
    }
  }

  const defaultTab = tabOptions[0];
  return defaultTab.tabIdentifier;
}
