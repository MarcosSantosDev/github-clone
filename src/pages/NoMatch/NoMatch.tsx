import { Link } from 'react-router-dom';
import * as S from './NoMatch.styles';
import { Button } from '../../common/components/structure/Button/Button.styles';

type NoMatchProps = {
  title: string;
};

const NoMatch = ({ title }: NoMatchProps) => {
  return (
    <S.ContainerDiv>
      <S.SpaceToImageDiv>
        <S.TitleNotFoundPeopleCodeSpan>{title}</S.TitleNotFoundPeopleCodeSpan>
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
