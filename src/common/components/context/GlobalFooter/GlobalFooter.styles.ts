import styled, { css } from 'styled-components';

export const ContainerDiv = styled.footer`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 115px;
    align-items: center;
    column-gap: 40px;

    margin: 0px 16px;
    border-top: 1px solid ${theme.border.colors.main};
  `}
`;

export const ContainerIncDiv = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 10px;

    span {
      font-size: ${theme.typograph.font.size.xsmall};
      color: #768390;
    }
  `}
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

export const Li = styled.li`
  list-style: none;
`;
