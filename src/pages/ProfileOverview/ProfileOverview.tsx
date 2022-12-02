import {
  TabNavigation,
  Profile,
  TabContent,
} from '@/common/components/context/ProfileOverview';
import { user } from '@/common/components/context/ProfileOverview/mock';

import * as S from './ProfileOverview.styles';

const ProfileOverview = () => (
  <S.ContainerDiv>
    <S.Nav>
      <TabNavigation />
    </S.Nav>
    <S.Main>
      <S.ProfileContentAside>
        <Profile
          information={{
            avatar_url: user.avatar_url,
            login: user.login,
            name: user.name,
            bio: user.bio,
          }}
          details={{
            blog: user.blog,
            company: user.company,
            email: user.email,
            followers: user.followers,
            following: user.following,
            location: user.location,
          }}
        />
      </S.ProfileContentAside>
      <S.GeneralContentDiv>
        <TabContent />
      </S.GeneralContentDiv>
    </S.Main>
  </S.ContainerDiv>
);

export default ProfileOverview;
