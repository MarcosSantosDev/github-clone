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
      border-bottom-color: ${theme.colors.border.normal[5]};

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
    border-radius: ${theme.radius.small};

    transition: background-color 0.5s;
    &:hover {
      background: ${theme.colors.background.hover[3]};
    }
  `}
`;

export const TabIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${theme.colors.text.normal[8]};
    }
  `}
`;

export const TabSpan = styled.span`
  ${({ theme }) => css`
    font-size: 14px;
    color: ${theme.colors.text.normal[3]};
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
    border-radius: ${theme.radius.medium};
    color: ${theme.colors.text.normal[8]};
    background-color: ${theme.colors.background.normal[1]};
  `}
`;
