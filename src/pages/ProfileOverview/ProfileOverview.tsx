import { useParams } from 'react-router-dom';

import { TabNavigation, TabContent } from './NavigationTabs';
import Profile from './Profile/Profile';
import * as S from './ProfileOverview.styles';

const ProfileOverview = () => {
  const params = useParams<{ profile: string }>();

  if (!params.profile) {
    return <h2>Invalid params!</h2>;
  }

  return (
    <S.ContainerDiv>
      <S.Nav>
        <TabNavigation />
      </S.Nav>
      <S.Main>
        <S.ProfileContentAside>
          <Profile profile={params.profile} />
        </S.ProfileContentAside>
        <S.GeneralContentDiv>
          <TabContent />
        </S.GeneralContentDiv>
      </S.Main>
    </S.ContainerDiv>
  );
};

export default ProfileOverview;
