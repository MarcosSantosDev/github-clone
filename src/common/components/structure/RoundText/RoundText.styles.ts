import styled, { css } from 'styled-components';

import type {
  RoundTextType,
  RoundTextVariant,
  RoundTextContainerDivProps,
  LinkVariantColor,
  TextVariantColor,
} from './RoundText.types';

const textVariantColor: TextVariantColor = {
  primary: {
    color: '#768390',
    backgroundColor: 'transparent',
    borderColor: '#444c56',
  },
  secondary: {
    color: '#539bf5',
    backgroundColor: 'transparent',
    borderColor: '#539bf5',
  },
  success: {
    color: '#57ab5a',
    backgroundColor: 'transparent',
    borderColor: '#347d39',
  },
};

const linkVariantColor: LinkVariantColor = {
  primary: {
    normal: {
      color: '#768390',
      backgroundColor: '#444c56',
      borderColor: 'transparent',
    },
    hover: {
      color: '#cdd9e5',
      backgroundColor: '#768390',
      borderColor: 'transparent',
    },
  },
  secondary: {
    normal: {
      color: '#539bf5',
      backgroundColor: '#4184e426',
      borderColor: 'transparent',
    },
    hover: {
      color: '#cdd9e5',
      backgroundColor: '#316dca',
      borderColor: 'transparent',
    },
  },
  success: {
    normal: {
      color: '#FFF',
      backgroundColor: '#57ab5acc',
      borderColor: 'transparent',
    },
    hover: {
      color: '#DDD',
      backgroundColor: '#57ab5a',
      borderColor: 'transparent',
    },
  },
};

function getRoundTextVariantCSS(
  type: RoundTextType,
  variant: RoundTextVariant,
) {
  if (type === 'link') {
    const linkStyles = linkVariantColor[variant];

    return css`
      border-color: ${linkStyles.normal.borderColor};
      background-color: ${linkStyles.normal.backgroundColor};

      > span {
        color: ${linkStyles.normal.color};
      }

      &:hover {
        background-color: ${linkStyles.hover.backgroundColor};

        > span {
          color: ${linkStyles.hover.color};
        }
      }
    `;
  }

  const textStyles = textVariantColor[variant];

  return css`
    border-color: ${textStyles.borderColor};

    > span {
      color: ${textStyles.color};
    }
  `;
}

export const RoundTextContainerDiv = styled.div<RoundTextContainerDivProps>`
  ${({ type, variant, spacing = '1' }) => css`
    display: inline-block;
    width: min-content;
    height: min-content;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
    border: 1px solid;
    border-radius: 2em;
    padding: 0 ${spacing === '1' ? 7 : 10}px;

    ${getRoundTextVariantCSS(type, variant)}
  `}
`;
