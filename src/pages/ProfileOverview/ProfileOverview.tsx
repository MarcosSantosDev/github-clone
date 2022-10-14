import {
  Navigation,
  Profile,
  Overview,
} from '@/common/components/context/ProfileOverview';
import type { TabOption } from '@/common/components/structure/Tab/Tab';

import * as S from './ProfileOverview.styles';

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

const DefaultProfile = () => {
  const tabIdentifierActiveDefault = tabs[0].tabIdentifier;

  return (
    <S.ContainerDiv>
      <S.Nav>
        <Navigation
          profileLoginName="MarcosSantosDev"
          profileUrlImg="https://avatars.githubusercontent.com/u/26147340?v=4"
          tabs={tabs}
          tabIdentifierActiveDefault={tabIdentifierActiveDefault}
        />
      </S.Nav>
      <S.Main>
        <S.ProfileContentAside>
          <Profile />
        </S.ProfileContentAside>
        <S.GeneralContentDiv>
          <Overview />
        </S.GeneralContentDiv>
      </S.Main>
    </S.ContainerDiv>
  );
};

export default DefaultProfile;
