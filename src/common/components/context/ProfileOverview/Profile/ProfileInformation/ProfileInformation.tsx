import { Button } from '@/common/components/structure';
import { User } from '@/common/types';

import * as S from './ProfileInformation.styles';

type ProfileInformationProps = Pick<
  User,
  'avatar_url' | 'name' | 'login' | 'bio'
> & {
  onEditProfile: () => void;
};

const ProfileInformation = ({
  avatar_url,
  name,
  login,
  bio,
  onEditProfile,
}: ProfileInformationProps) => {
  return (
    <S.Container>
      <S.ProfileImageContainerDiv>
        <S.AvatarImg src={avatar_url} alt="github avatar" />
      </S.ProfileImageContainerDiv>
      <S.InformationContainerDiv>
        <S.NameP>{name}</S.NameP>
        <S.LoginP>{login}</S.LoginP>
      </S.InformationContainerDiv>
      <S.InformationContainerDiv>
        <S.BiographyP>{bio}</S.BiographyP>
      </S.InformationContainerDiv>
      <Button type="button" size="medium" fullWidth onClick={onEditProfile}>
        Edit Profile
      </Button>
    </S.Container>
  );
};

export default ProfileInformation;
