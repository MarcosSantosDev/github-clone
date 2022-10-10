import { Link } from '@/common/components/structure';
import { loader } from '@/common/icons/loader';

import * as S from './GlobalFooter.styles';

const GlobalFooter = () => (
  <S.ContainerDiv>
    <S.ContainerIncDiv>
      <div>{loader('github', 24)}</div>
      <span>© 2022 GitHub, Inc.</span>
    </S.ContainerIncDiv>
    <S.Nav>
      <S.Ul>
        <S.Li>
          <Link to="/">Terms</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Privacy</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Security</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Status</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Docs</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Contact GitHub</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Pricing</Link>
        </S.Li>
        <S.Li>
          <Link to="/">API</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Training</Link>
        </S.Li>
        <S.Li>
          <Link to="/">Blog</Link>
        </S.Li>
        <S.Li>
          <Link to="/">About</Link>
        </S.Li>
      </S.Ul>
    </S.Nav>
  </S.ContainerDiv>
);

export default GlobalFooter;
