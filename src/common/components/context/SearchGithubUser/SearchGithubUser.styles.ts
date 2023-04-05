import styled from 'styled-components';

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
