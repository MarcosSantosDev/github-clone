import { User } from '@/common/types';

import * as S from './ProfileInformation.styles';

type ProfileInformationProps = Pick<User, 'avatar_url' | 'name' | 'login'>;

const ProfileInformation = ({
  avatar_url,
  name,
  login,
}: ProfileInformationProps) => {
  return (
    <S.Container>
      <S.ProfileImageContainerDiv>
        <S.AvatarImg src={avatar_url} alt="github avatar" />
      </S.ProfileImageContainerDiv>
      <S.NamesContainerDiv>
        <S.NameP>{name}</S.NameP>
        <S.LoginP>{login}</S.LoginP>
      </S.NamesContainerDiv>
    </S.Container>
  );
};

export default ProfileInformation;
