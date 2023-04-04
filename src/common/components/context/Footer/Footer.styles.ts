import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 115px;
    align-items: center;
    column-gap: 40px;
    margin: 0px 16px;
    border-top: 1px solid ${theme.colors.border.normal[3]};
  `}
`;

export const CopyrightContainerDiv = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 10px;

    span {
      font-size: ${theme.typograph.font.size.xxsmall};
      color: ${theme.colors.text.normal[4]};
    }
  `}
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  max-width: 80%;
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
