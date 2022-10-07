import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-areas: 'profile tabs';
  grid-template-rows: auto;
  column-gap: 10px;
  padding-top: 32px;
`;

export const ProfileDiv = styled.div`
  grid-area: profile;
  height: 48px;
`;

export const TabsDiv = styled.div`
  grid-area: tabs;
  height: 48px;
`;
