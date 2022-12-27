import { Link as LinkReactRouterDom } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(LinkReactRouterDom)`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.text.normal[7]};

    :hover {
      text-decoration: underline;
    }
  `}
`;
