import { user } from '../mock';
import * as S from './Profile.styles';
import ProfileInformation from './ProfileInformation/ProfileInformation';

const Profile = () => {
  return (
    <S.ContainerDiv>
      <ProfileInformation
        avatar_url={user.avatar_url}
        login={user.login}
        name={user.name}
      />
    </S.ContainerDiv>
  );
};

export default Profile;
