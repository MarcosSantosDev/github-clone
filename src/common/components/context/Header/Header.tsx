import { Link } from 'react-router-dom';

import { loader } from '@/common/icons';

import * as S from './Header.styles';

const Header = () => (
  <S.Header>
    <S.IconContainerDiv>{loader('githubinverted', 32)}</S.IconContainerDiv>

    <S.Label htmlFor="general-search">
      <S.InputSearch
        type="text"
        id="general-search"
        name="general-search"
        placeholder="Search or jump to…"
        aria-label="general-search"
        aria-placeholder="Search or jump to…"
        role="combobox"
        autoComplete="off"
      />
    </S.Label>

    <S.Nav>
      <S.Ul>
        <S.Li>
          <Link to={window.location.pathname}>Pull requests</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Issues</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Codespaces</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Marketplace</Link>
        </S.Li>
        <S.Li>
          <Link to={window.location.pathname}>Explore</Link>
        </S.Li>
      </S.Ul>
    </S.Nav>
  </S.Header>
);

export default Header;
