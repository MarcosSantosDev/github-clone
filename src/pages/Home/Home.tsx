// import { Link } from 'react-router-dom';

import { Input } from '@/common/components/form';
import { Button, ProfileCard } from '@/common/components/structure';

import * as S from './Home.styles';

const Home = () => {
  const fetched = !false;
  const isLoading = !false;

  const profile = {
    photoUrl: 'https://avatars.githubusercontent.com/u/26147340?v=4',
    name: 'Marcos Adriano Ferreira Dos Santos',
    username: 'MarcosSantosDev',
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username') as string | null;

    if (username) {
      //
    }
  };

  return (
    <S.ContainerDiv>
      <S.MainContentDiv>
        <S.PresentationSection>
          <S.PresentationTitleH1>
            Where the world builds software
          </S.PresentationTitleH1>
          <S.PresentationDescriptionP>
            Millions of developers and companies build and maintain their
            software on GitHub - the world's largest and most advanced
            development platform.
          </S.PresentationDescriptionP>
        </S.PresentationSection>

        <S.SearchUserContainerSection>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Search a user profile"
            />
            <Button
              type="button"
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
            {fetched ? (
              <ProfileCard isLoading={isLoading} profile={profile} />
            ) : null}
          </S.SearchUserResultContainerDiv>
        </S.SearchUserContainerSection>
      </S.MainContentDiv>
      <S.GithubImageDiv />
    </S.ContainerDiv>
  );
};

export default Home;
