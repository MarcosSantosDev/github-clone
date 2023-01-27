import styled, { css } from 'styled-components';

import { blackTheme as theme } from '@/styles/themes';

import { ButtonProps, Sizes, ButtonVariant, Variant } from './Button.types';

export const buttonSizes: Record<Sizes, string> = {
  small: 'padding: 4px 6px;',
  medium: 'padding: 8px 12px;',
  large: 'padding: 16px 32px;',
};

const buttonVariantColor: ButtonVariant = {
  primary: {
    color: theme.colors.text.normal[3],
    backgroundColor: theme.colors.background.normal[2],
    borderColor: theme.colors.border.normal[3],
  },
  success: {
    color: theme.colors.text.normal[1],
    backgroundColor: theme.colors.background.normal[5],
    borderColor: theme.colors.border.normal[4],
  },
};

function getButtonVariantCSS(variant: Variant) {
  const buttonStyles = buttonVariantColor[variant];

  return css`
    color: ${buttonStyles.color};
    background-color: ${buttonStyles.backgroundColor};
    border: 1px solid ${buttonStyles.borderColor};

    svg {
      color: ${buttonStyles.color} !important;
      fill: ${buttonStyles.color} !important;
    }
  `;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, fullWidth, size = 'small', variant = 'primary' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    width: ${fullWidth ? '100%' : 'max-content'};
    height: fit-content;
    border-radius: ${theme.radius.small};
    ${buttonSizes[size]}
    ${getButtonVariantCSS(variant)}

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

export const ButtonWithIcon = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 4px;
`;
