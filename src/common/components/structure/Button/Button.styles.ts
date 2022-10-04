import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

export const Button = styled.button<ButtonProps>`
  ${({ theme, fullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? '100%' : 'max-content'};
    text-align: center;
    font-size: 16px;
    padding: 4px 6px;
    color: ${theme.colors.neutral.gray[50]};
    background-color: ${theme.colors.neutral.gray[400]};
    border: 1px solid ${theme.border.colors.main};
    border-radius: 4px;
    cursor: pointer;

    svg {
      margin: 0 4px;
      font-size: 16px;
      color: inherit;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &:hover:not([disabled]) {
      opacity: 0.8;
      box-shadow: 0px 0px 50px 0px rgba(19, 38, 47, 0.2);
    }
  `}
`;
