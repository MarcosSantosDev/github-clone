import * as React from 'react';

import Tab from '@/common/components/structure/Tab/Tab';
import { useTab } from '@/common/hooks';

import { user } from '../../mock';
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

const Navigation = () => {
  const { avatar_url, login, public_repos } = user;
  const { setTab, tab } = useTab();

  const currentTabIdentifier = getTabActive(tab);

  function getCounterByTabIdentifier(tabIdentifier: TabIdentifier) {
    switch (tabIdentifier) {
      case 'repositories':
        return public_repos;
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
        <S.ProfileImg src={avatar_url} alt="small profile" />
        <S.ProfileNameSpan>{login}</S.ProfileNameSpan>
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

export default Navigation;
