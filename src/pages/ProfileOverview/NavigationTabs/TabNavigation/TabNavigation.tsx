import * as React from 'react';

import { useParams } from 'react-router-dom';

import Tab from '@/common/components/structure/Tab/Tab';
import { useTab } from '@/common/hooks';
import { useQueryFetchGithubUser } from '@/common/hooks/reactQuery';

import { tabOptions, getTabActive } from '../../shared/navigationTabs';
import type { TabIdentifier } from '../../shared/navigationTabs';
import * as S from './TabNavigation.styles';

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

const TabNavigation = () => {
  const { setTab, tab } = useTab();
  const currentTabIdentifier = getTabActive(tab);

  const navigationParams = useParams<{ username?: string }>();

  const { data: githubUser } = useQueryFetchGithubUser({
    username: navigationParams?.username ?? '',
  });

  const profile = {
    avatarUrl: githubUser?.avatar_url ?? '',
    login: githubUser?.login ?? '',
    publicRepos: githubUser?.public_repos ?? 0,
  };

  function getCounterByTabIdentifier(tabIdentifier: TabIdentifier) {
    switch (tabIdentifier) {
      case 'repositories':
        return profile.publicRepos;
      case 'stars':
        return 0;
      default:
        return;
    }
  }

  React.useEffect(() => {
    controlClassesByScroll();
  }, []);

  return (
    <S.ContainerDiv>
      <S.ProfileNavigationDiv id="profile-navigation">
        <S.ProfileImg src={profile.avatarUrl} alt="Profile" />
        <S.ProfileNameSpan>{profile.login}</S.ProfileNameSpan>
      </S.ProfileNavigationDiv>
      <S.TabOptionsDiv>
        {tabOptions.map(tabOption => (
          <Tab
            {...tabOption}
            counter={getCounterByTabIdentifier(tabOption.tabIdentifier)}
            onClickTab={setTab}
            tabActive={tabOption.tabIdentifier === currentTabIdentifier}
            key={tabOption.tabIdentifier}
          />
        ))}
      </S.TabOptionsDiv>
    </S.ContainerDiv>
  );
};

export default TabNavigation;
