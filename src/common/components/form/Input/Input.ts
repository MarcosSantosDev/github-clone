import * as React from 'react';
import styled, { css } from 'styled-components';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    padding: 5px 12px;
    font-size: ${theme.typograph.font.size.small};
    line-height: 20px;
    color: ${theme.colors.secondary};
    vertical-align: middle;
    background-color: ${theme.colors.main};
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid ${theme.border.colors.secondary};
    border-radius: 6px;
    box-shadow: 0 0 transparent;
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color, background-color, box-shadow, border-color;
  `}
`;
