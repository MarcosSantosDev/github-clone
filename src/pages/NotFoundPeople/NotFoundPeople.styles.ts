import styled, { css } from 'styled-components';

export const ContainerDiv = styled.div``;

export const SpaceToImageDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 400px);
    background: ${theme.colors.background.normal[2]};
  `}
`;

export const TitleNotFoundPeopleCodeSpan = styled.span`
  font-size: 72px;
`;

export const NotFoundPeopleContainerDiv = styled.div`
  margin: 60px auto 0;
  width: 600px;
`;

export const NotFoundPeopleForm = styled.form``;

export const FormContentDiv = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 400px 100px;
  grid-template-rows: auto auto;
  grid-template-areas: 'label .' 'input button';
  column-gap: 20px;
  row-gap: 10px;

  label {
    grid-area: label;
  }

  input {
    grid-area: input;
  }

  button {
    grid-area: button;
  }
`;

export const NotFoundPeopleLabel = styled.label`
  ${({ theme }) => css`
    font-weight: 400;
    color: ${theme.colors.text.normal[4]};
  `}
`;
