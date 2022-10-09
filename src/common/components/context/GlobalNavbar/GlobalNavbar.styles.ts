import styled, { css } from 'styled-components';

import { Input } from '../../form';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    grid-area: header;
    background: ${theme.colors.neutral.black};
    color: ${theme.colors.neutral.white};
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

    input + .input-hack {
      position: absolute;
      right: 6px;
      top: 6px;
      width: 25px;
      height: 20px;
      color: ${theme.colors.neutral.gray[200]};
      background: trasparent;
      border: 1px solid ${theme.border.colors.secondary};
      border-radius: 5px;
      font-size: 12px;
      text-align: center;
      line-height: 1.5;
    }
  `}
`;

export const InputSearch = styled(Input)`
  ${({ theme }) => css`
    width: 272px;
    color: ${theme.colors.neutral.white};
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    transition: 0.5s;

    &:focus {
      width: 542px;
    }

    &::placeholder {
      color: ${theme.colors.neutral.gray[100]};
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
    font-weight: 600;
    white-space: nowrap;

    & > a {
      text-decoration: none;
      color: ${theme.colors.neutral.white};

      &:hover {
        opacity: 0.5;
        transition: 0.4s;
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
      fill: ${theme.colors.neutral.white};

      &:hover {
        fill: ${theme.colors.neutral.gray[100]};
        transition: 0.4s;
      }
    }
  `}
`;
