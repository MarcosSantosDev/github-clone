import styled, { css } from 'styled-components';

import { Input } from '../../form';

export const Header = styled.header`
  ${({ theme }) => css`
    grid-area: header;
    display: flex;
    align-items: center;
    flex-shrink: 1;
    background: ${theme.colors.background.normal[3]};
    color: ${theme.colors.text.normal[2]};
    padding: 0px 32px;
    max-width: 100%;
    max-height: 100%;
  `}
`;

export const Nav = styled.nav``;

export const Label = styled.label`
  ${({ theme }) => css`
    position: relative;
    width: fit-content;
    height: fit-content;

    ::after {
      content: '/';
      display: inline-block;
      position: absolute;
      right: 10px;
      top: 4px;
      width: 25px;
      height: 18px;
      color: ${theme.colors.text.normal[3]};
      background: transparent;
      font-size: ${theme.typograph.font.size.xxsmall};
      text-align: center;
      line-height: 1.5;
      border: 1px solid ${theme.colors.border.normal[2]};
      border-radius: ${theme.radius.small};
    }

    :focus-within::after {
      content: none;
    }
  `}
`;

export const InputSearch = styled(Input)`
  ${({ theme }) => css`
    outline: none;
    position: relative;
    padding: 0px;
    width: 248px;
    height: 28px;
    border: 1px solid ${theme.colors.border.normal[2]};
    border-radius: ${theme.radius.small};
    background-color: ${theme.colors.background.normal[4]};
    color: ${theme.colors.text.normal[1]};
    font-size: ${theme.typograph.font.size.xsmall};
    transition: width 0.5s;
    text-indent: 10px;

    ::placeholder {
      color: ${theme.colors.text.normal[2]};
      font-size: 14px;
    }

    :focus {
      width: 542px;
    }
  `}
`;

export const Ul = styled.ul`
  display: inline-flex;
  list-style: none;
  padding: 0 16px;
  margin: 0px;

  & > li {
    margin-right: 16px;
  }

  & > li:last-child {
    margin-right: 0px;
  }
`;

export const Li = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.typograph.font.size.xsmall};
    font-weight: 600;
    white-space: nowrap;

    & > a {
      text-decoration: none;
      color: ${theme.colors.text.normal[2]};

      &:hover {
        color: ${theme.colors.text.normal[3]};
      }
    }
  `}
`;

export const IconContainerDiv = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    margin-right: 15px;
    height: 32px;

    > svg {
      fill: ${theme.colors.text.normal[2]};

      &:hover {
        fill: ${theme.colors.text.normal[3]};
        transition: 0.4s;
      }
    }
  `}
`;
