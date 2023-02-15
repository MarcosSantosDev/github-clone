import { Link as LinkReactRouterDom } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkWrapper = styled(LinkReactRouterDom)`
  ${({ theme }) => css`
    display: contents;
    text-decoration: none;
    color: inherit;

    :hover {
      * {
        color: ${theme.colors.text.normal[7]};
      }

      svg {
        fill: ${theme.colors.text.normal[7]};
      }
    }
  `}
`;
