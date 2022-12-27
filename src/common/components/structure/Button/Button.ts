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
    height: fit-content;
    text-align: center;
    font-size: 14px;
    color: ${theme.colors.text.normal[3]};
    background-color: ${theme.colors.background.normal[2]};
    border: 1px solid ${theme.colors.border.normal[3]};
    border-radius: ${theme.radius.small};
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
