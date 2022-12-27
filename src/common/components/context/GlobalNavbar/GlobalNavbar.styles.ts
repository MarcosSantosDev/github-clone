import styled, { css } from 'styled-components';

import { Input } from '../../form';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    grid-area: header;
    background: ${theme.colors.background.normal[3]};
    color: ${theme.colors.text.normal[2]};
    padding: 16px 32px;
    max-width: 100%;
    max-height: 60px;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-shrink: 1;
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 272px;
    height: 28px;
    border: 1px solid ${theme.colors.border.normal[2]};
    border-radius: ${theme.radius.small};
    background-color: ${theme.colors.background.normal[4]};

    input + .input-hack {
      position: absolute;
      right: 4px;
      top: 3px;
      width: 22px;
      height: 20px;
      color: ${theme.colors.text.normal[3]};
      background: trasparent;
      font-size: ${theme.typograph.font.size.xxsmall};
      text-align: center;
      line-height: 1.5;
    }

    .input-hack {
      border: 1px solid ${theme.colors.border.normal[2]};
      border-radius: ${theme.radius.small};
    }
  `}
`;

export const InputSearch = styled(Input)`
  ${({ theme }) => css`
    width: 100%;
    height: 20px;
    color: ${theme.colors.text.normal[1]};
    border: none;
    font-size: ${theme.typograph.font.size.xsmall};
    outline: none;
    transition: 0.5s;

    &:focus {
      width: 542px;
    }

    &::placeholder {
      color: ${theme.colors.text.normal[2]};
      font-size: 14px;
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
