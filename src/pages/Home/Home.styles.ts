import styled, { css } from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const GithubImageDiv = styled.div`
  background: url(./images/bg_home_github.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

export const SearchUserContainerSection = styled.section`
  display: grid;
  grid-template-columns: minmax(150px, 350px) minmax(100px, 150px);
  grid-template-rows: max-content 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  > form {
    display: contents;
  }

  > input {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  > button {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  input,
  button {
    height: 40px;
  }
`;

export const SearchUserResultContainerDiv = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;
`;
