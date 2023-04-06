import styled, { css } from 'styled-components';

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
    }

    > button:disabled {
      color: ${theme.colors.text.normal[2]};
      background-color: transparent;
      border: none;

      svg {
        color: ${theme.colors.text.normal[2]} !important;
        fill: ${theme.colors.text.normal[2]} !important;
        stroke: ${theme.colors.text.normal[2]} !important;
      }
    }
  `}
`;
