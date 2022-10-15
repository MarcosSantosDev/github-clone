import styled, { css } from 'styled-components';

export const ContainerDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    height: 42px;
    border: 0px;
    border-bottom: 2px solid transparent;

    &.active {
      border-bottom-color: ${theme.colors.vivid[50]};

      span {
        font-weight: ${theme.typograph.weight.bold};
      }
    }
  `}
`;

export const TabContentDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 30px;
    padding: 0px 8px;
    border-radius: 8px;

    transition: background-color 0.5s;
    &:hover {
      background: ${theme.colors.neutral.gray[900]};
    }
  `}
`;

export const TabIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${theme.colors.neutral.gray[250]};
    }
  `}
`;

export const TabSpan = styled.span`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.secondary};
    white-space: nowrap;
  `}
`;

export const TabCounter = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    text-align: center;
    border-radius: 32px;
    color: ${theme.colors.neutral.gray[250]};
    background-color: ${theme.colors.neutral.gray[350]};
  `}
`;
