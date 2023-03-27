import { useQueryFetchGithubUser } from '@/common/hooks/reactQuery/queries/useGithub';

import Details from './Details/Details';
import Information from './Information/Information';
import * as S from './Profile.styles';

type ProfileProps = {
  profile: string;
};

const Profile = ({ profile }: ProfileProps) => {
  const { data: user } = useQueryFetchGithubUser({
    user: profile,
  });

  const handleEditProfile = () => {
    //
  };

  return (
    <S.ContainerDiv>
      {user ? (
        <>
          <Information
            avatar_url={user.avatar_url}
            login={user.login}
            name={user.name}
            bio={user.bio}
            onEditProfile={handleEditProfile}
          />
          <Details
            login={user.login}
            blog={user.blog}
            company={user.company}
            email={user.email}
            followers={user.followers}
            following={user.following}
            location={user.location}
          />
        </>
      ) : null}
    </S.ContainerDiv>
  );
};

export default Profile;
