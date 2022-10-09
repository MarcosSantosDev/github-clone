import { Input } from '@/common/components/form';
import { Button } from '@/common/components/structure';

import * as S from './NotFoundPeople.styles';

function Home() {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const notFoundPeopleValue = formData.get('profile') as string | null;

    // eslint-disable-next-line no-console
    console.log(notFoundPeopleValue);
  };

  return (
    <S.ContainerDiv>
      <S.SpaceToImageDiv>
        <S.TitleNotFoundPeopleCodeSpan>404</S.TitleNotFoundPeopleCodeSpan>
      </S.SpaceToImageDiv>
      <S.NotFoundPeopleContainerDiv>
        <S.NotFoundPeopleForm onSubmit={handleOnSubmit}>
          <S.FormContentDiv>
            <S.NotFoundPeopleLabel htmlFor="profile">
              Find people on GitHub:
            </S.NotFoundPeopleLabel>
            <Input type="text" id="profile" />
            <Button type="submit" fullWidth>
              Search
            </Button>
          </S.FormContentDiv>
        </S.NotFoundPeopleForm>
      </S.NotFoundPeopleContainerDiv>
    </S.ContainerDiv>
  );
}

export default Home;
