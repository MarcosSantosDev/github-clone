import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  if (!profile || isLoading) {
    return <CardFeedback isLoading={isLoading} isEmpty={!profile} />;
  }

  const goToUserProfile = () => {
    navigate(`/github/${profile.username}`);
  };

  return (
    <S.ContainerDiv role="contentinfo">
      <S.ProfileImg
        src={profile.photoUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = '/images/github-spinner.svg';
        }}
        loading="lazy"
        alt="Person profile"
      />

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
        onClick={goToUserProfile}
      >
        View profile
      </Button>
    </S.ContainerDiv>
  );
};

export default ProfileCard;
