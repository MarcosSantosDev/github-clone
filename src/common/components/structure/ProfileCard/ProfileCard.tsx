import React from 'react';

import { Button } from '../Button/Button';
import CardFeedback from './CardFeedback/CardFeedback';
import * as S from './ProfileCard.styles';

type ProfileCardProps = {
  isLoading?: boolean;
  profile?: {
    photoUrl: string;
    name: string;
    username: string;
  };
};

const ProfileCard = ({ profile, isLoading }: ProfileCardProps) => {
  if (!profile || isLoading) {
    return <CardFeedback isLoading={isLoading} isEmpty={!profile} />;
  }

  return (
    <S.ContainerDiv role="contentinfo">
      <S.ProfileImg src={profile.photoUrl} alt="profile" />

      <S.ProfileInformationDiv>
        <h4>{profile.name}</h4>
        <p>{profile.username}</p>
      </S.ProfileInformationDiv>

      <Button
        type="button"
        variant="success"
        size="medium"
        icon={{
          name: 'githubinverted',
          side: 'left',
        }}
        fullWidth
      >
        View profile
      </Button>
    </S.ContainerDiv>
  );
};

export default ProfileCard;
