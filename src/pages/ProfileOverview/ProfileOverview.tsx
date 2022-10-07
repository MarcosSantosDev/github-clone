import {
  TabNavigation,
  Profile,
  Repositories,
} from '../../common/components/context/ProfileOverview';
import * as S from './ProfileOverview.styles';

const DefaultProfile = () => {
  return (
    <S.ContainerDiv>
      <S.Nav>
        <TabNavigation />
      </S.Nav>
      <S.Aside>
        <Profile />
      </S.Aside>
      <S.Main>
        <Repositories />
      </S.Main>
    </S.ContainerDiv>
  );
};

export default DefaultProfile;
