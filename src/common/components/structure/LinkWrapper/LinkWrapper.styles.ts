import { Link as LinkReactRouterDom } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkWrapper = styled(LinkReactRouterDom)`
  ${({ theme }) => css`
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
      color: ${theme.colors.text.normal[7]};

      svg {
        color: ${theme.colors.text.normal[7]};
        fill: ${theme.colors.text.normal[7]};
      }
    }
  `}
`;
