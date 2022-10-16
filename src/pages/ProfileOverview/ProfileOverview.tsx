import {
  Navigation,
  Profile,
  Overview,
} from '@/common/components/context/ProfileOverview';

import * as S from './ProfileOverview.styles';

const DefaultProfile = () => {
  return (
    <S.ContainerDiv>
      <S.Nav>
        <Navigation
          profileLoginName="MarcosSantosDev"
          profileUrlImg="https://avatars.githubusercontent.com/u/26147340?v=4"
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
