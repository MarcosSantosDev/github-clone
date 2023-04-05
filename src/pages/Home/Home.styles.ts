import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const MainContentDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 60px;
`;

export const PresentationSection = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 500px);
  grid-template-rows: repeat(2, auto);
  justify-content: center;
  align-items: center;
`;

export const PresentationTitleH1 = styled.h1`
  font-size: 38px;
  font-weight: lighter;
  color: #fff;
  letter-spacing: 2px;
`;

export const PresentationDescriptionP = styled.p`
  font-size: 18px;
  font-weight: lighter;
  color: #fff;
  letter-spacing: 2px;
`;

export const GithubImageDiv = styled.div`
  background-image: url(/images/inbox-zero-dark.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
