import { SearchGithubUser } from '@/common/components/context';

import * as S from './Home.styles';

const Home = () => {
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

        <SearchGithubUser />
      </S.MainContentDiv>
      <S.GithubImageDiv />
    </S.ContainerDiv>
  );
};

export default Home;
