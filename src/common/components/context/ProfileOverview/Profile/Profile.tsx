import Details, { DetailsProps } from './Details/Details';
import Information, { InformationProps } from './Information/Information';
import * as S from './Profile.styles';

type ProfileProps = {
  information: Omit<InformationProps, 'onEditProfile'>;
  details: DetailsProps;
};

const Profile = ({ information, details }: ProfileProps) => {
  const handleEditProfile = () => {
    //
  };

  return (
    <S.ContainerDiv>
      <Information {...information} onEditProfile={handleEditProfile} />
      <Details {...details} />
    </S.ContainerDiv>
  );
};

export default Profile;
