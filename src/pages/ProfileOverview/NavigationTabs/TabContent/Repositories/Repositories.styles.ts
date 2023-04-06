import styled, { css } from 'styled-components';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 60px auto 100px;
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

export const PaginationDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    border-top: 1px solid ${theme.colors.border.normal[6]};

    > button {
      min-width: 100px;
      color: ${theme.colors.text.normal[7]};
      background-color: transparent;
      border: 1px solid transparent;
      transition: all 500ms ease;

      svg {
        color: ${theme.colors.text.normal[7]} !important;
        fill: ${theme.colors.text.normal[7]} !important;
        stroke: ${theme.colors.text.normal[7]} !important;
      }

      :hover {
        border: 1px solid ${theme.colors.border.normal[6]};
      }

      :disabled {
        color: ${theme.colors.text.normal[2]};
        background-color: transparent;
        border: none;

        svg {
          color: ${theme.colors.text.normal[2]} !important;
          fill: ${theme.colors.text.normal[2]} !important;
          stroke: ${theme.colors.text.normal[2]} !important;
        }
      }
    }
  `}
`;
