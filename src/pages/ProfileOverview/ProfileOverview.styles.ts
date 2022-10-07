import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'nav nav' 'aside main';
  grid-template-rows: auto 1fr;
  column-gap: 10px;
`;

export const Nav = styled.nav`
  grid-area: nav;
`;

export const Aside = styled.aside`
  grid-area: aside;
  background: #cdcdcd22;
`;

export const Main = styled.main`
  grid-area: main;
  background: #cdcdcd33;
`;
