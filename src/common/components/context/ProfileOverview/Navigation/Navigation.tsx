import * as React from 'react';

import { useSearchParams } from 'react-router-dom';

import Tab, { TabOption } from '@/common/components/structure/Tab/Tab';

import { user } from '../mock';
import * as S from './Navigation.styles';

const tabs: TabOption[] = [
  { tabIdentifier: 'overview', iconName: 'openPreview', label: 'Overview' },
  {
    tabIdentifier: 'repositories',
    iconName: 'library',
    label: 'Repositories',
    counter: 38,
  },
  { tabIdentifier: 'projects', iconName: 'graph', label: 'Projects' },
  { tabIdentifier: 'packages', iconName: 'extensions', label: 'Packages' },
  {
    tabIdentifier: 'stars',
    iconName: 'starfull',
    label: 'Stars',
    counter: 143,
  },
];

const defaultTabActive = tabs[0].tabIdentifier;

function getTabActive(tabParam: string | null) {
  if (tabParam !== null) {
    const validTab = tabs.find(tab => tab.tabIdentifier === tabParam);

    if (validTab) {
      return tabParam;
    }
  }

  return defaultTabActive;
}

function controlProfileNavigationClasses() {
  const element = document.getElementById('profile-navigation');

  if (element !== null) {
    const documentElement = document.documentElement;
    const { scrollTop, scrollHeight, clientHeight } = documentElement;

    const scrollSizePercentage =
      (100 * scrollTop) / (scrollHeight - clientHeight);

    if (scrollSizePercentage > 40) {
      element.classList.add('profile-navigation-visible');
    } else if (scrollSizePercentage < 40) {
      element.classList.remove('profile-navigation-visible');
    }
  }
}

function controlClassesByScroll() {
  window.addEventListener('scroll', function () {
    controlProfileNavigationClasses();
  });
}

const Navigation = () => {
  const { avatar_url, login } = user;
  const [searchParams, setSearchParams] = useSearchParams();

  const tabParam = searchParams.get('tab');
  const tabActive = getTabActive(tabParam);

  const handleOnClickTab = (tab: string) => {
    setSearchParams({ tab });
  };

  React.useEffect(() => {
    controlClassesByScroll();
  }, []);

  return (
    <S.ContainerDiv>
      <S.ProfileNavigationDiv id="profile-navigation">
        <S.ProfileImg src={avatar_url} alt="small profile" />
        <S.ProfileNameSpan>{login}</S.ProfileNameSpan>
      </S.ProfileNavigationDiv>
      <S.TabOptionsDiv>
        {tabs.map(tab => (
          <Tab
            {...tab}
            onClickTab={handleOnClickTab}
            tabActive={tab.tabIdentifier === tabActive}
            key={tab.tabIdentifier}
          />
        ))}
      </S.TabOptionsDiv>
    </S.ContainerDiv>
  );
};

export default Navigation;
