import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  row-gap: 16px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-rows: 1fr;
  row-gap: 6px;
`;

export const Li = styled.li`
  ${({ theme }) => css`
    list-style: none;

    display: grid;
    grid-template-columns: 20px 1fr;
    align-items: center;
    column-gap: 6px;

    span {
      font-size: 14px;
      color: ${theme.colors.secondary};
      white-space: nowrap;
    }
  `}
`;
