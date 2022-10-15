import * as React from 'react';

import styled, { css } from 'styled-components';

type Sizes = 'small' | 'medium' | 'large';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  size?: Sizes;
};

export const buttonSizes: Record<Sizes, string> = {
  small: 'padding: 4px 6px;',
  medium: 'padding: 8px 12px;',
  large: 'padding: 16px 32px;',
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, fullWidth, size = 'small' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${fullWidth ? '100%' : 'max-content'};
    text-align: center;
    font-size: 14px;
    color: ${theme.colors.neutral.gray[50]};
    background-color: ${theme.colors.neutral.gray[400]};
    border: 1px solid ${theme.border.colors.main};
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;

    ${buttonSizes[size]}

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
