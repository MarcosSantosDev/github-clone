import styled, { css } from 'styled-components';

import { Container } from '@/common/components/structure';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'nav nav' 'main main';
  grid-template-rows: auto 1fr;
  column-gap: 10px;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    grid-area: nav;

    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 3;
    height: 48px;
    margin-top: 24px;
    background: ${theme.colors.main};
    border-bottom: 1px solid ${theme.border.colors.secondary};
  `}
`;

export const Main = styled(Container)`
  grid-area: main;

  display: grid;
  grid-template-columns: 296px 1fr;
  grid-template-areas: 'aside content';
  column-gap: 24px;
  padding: 0px 32px;
`;

export const ProfileContentAside = styled.aside`
  grid-area: aside;
`;

export const GeneralContentDiv = styled.div`
  grid-area: content;

  background: #cdcdcd20;
`;
