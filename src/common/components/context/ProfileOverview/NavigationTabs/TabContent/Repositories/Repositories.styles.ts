import styled from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  row-gap: 10px;

  width: 100%;
  min-height: 600px;
`;

export const RepositorySearchWrapperDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 16px;
`;

export const RepositorySearchButtonGroupDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;

  button:last-child {
    margin-left: 10px;
  }
`;

export const RepositoryListWrapperDiv = styled.div``;
