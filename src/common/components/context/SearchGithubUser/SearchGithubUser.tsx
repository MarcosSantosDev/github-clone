import * as React from 'react';

import { Input } from '@/common/components/form';
import { Button, ProfileCard } from '@/common/components/structure';
import { useQueryFetchGithubUser } from '@/common/hooks/reactQuery/queries/useGithub';
import { GithubUser } from '@/services/requests/github.types';

import * as S from './SearchGithubUser.styles';

function getProfile(user?: GithubUser) {
  if (user) {
    return {
      photoUrl: user.avatar_url,
      name: user.name,
      username: user.login,
    };
  }

  return;
}

const SearchGithubUser = () => {
  const [username, setUsername] = React.useState('');

  const {
    data: user,
    refetch: fetchGithubUser,
    isFetching,
    isFetched,
  } = useQueryFetchGithubUser(
    {
      username,
    },
    {
      enabled: false,
    },
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const usernameToSearch = data.get('username') as string | null;

    if (usernameToSearch) {
      setUsername(usernameToSearch);
    }
  };

  React.useEffect(() => {
    if (username.trim().length > 0) {
      fetchGithubUser();
    }
  }, [username]);

  return (
    <S.SearchUserContainerSection>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Search a user profile"
        />
        <Button
          type="submit"
          variant="success"
          size="medium"
          icon={{
            name: 'organization',
            side: 'left',
          }}
          fullWidth
        >
          Search
        </Button>
      </form>

      <S.SearchUserResultContainerDiv>
        {isFetching || isFetched ? (
          <ProfileCard isLoading={isFetching} profile={getProfile(user)} />
        ) : null}
      </S.SearchUserResultContainerDiv>
    </S.SearchUserContainerSection>
  );
};

export default SearchGithubUser;
