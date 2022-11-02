import {
  TabNavigation,
  Profile,
  TabContent,
} from '@/common/components/context/ProfileOverview';

import * as S from './ProfileOverview.styles';

const ProfileOverview = () => (
  <S.ContainerDiv>
    <S.Nav>
      <TabNavigation />
    </S.Nav>
    <S.Main>
      <S.ProfileContentAside>
        <Profile />
      </S.ProfileContentAside>
      <S.GeneralContentDiv>
        <TabContent />
      </S.GeneralContentDiv>
    </S.Main>
  </S.ContainerDiv>
);

export default ProfileOverview;
