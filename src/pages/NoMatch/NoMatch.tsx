import { Link } from 'react-router-dom';

import { Button } from '@/common/components/structure';

import * as S from './NoMatch.styles';

const NoMatch = () => {
  return (
    <S.ContainerDiv>
      <S.SpaceToImageDiv>
        <S.TitleNotFoundPeopleCodeSpan>No Match!</S.TitleNotFoundPeopleCodeSpan>
      </S.SpaceToImageDiv>
      <S.NotFoundPeopleContainerDiv>
        <Link to="/github/MarcosSantosDev">
          <Button type="button" size="large" fullWidth>
            Go to "MarcosSantosDev"
          </Button>
        </Link>
      </S.NotFoundPeopleContainerDiv>
    </S.ContainerDiv>
  );
};

export default NoMatch;
