import { Link as LinkReactRouterDom } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Link = styled(LinkReactRouterDom)`
  ${({ theme }) => css`
    text-decoration: none;
    color: #539bf5;
    font-size: ${theme.typograph.font.size.xsmall};

    :hover {
      text-decoration: underline;
    }
  `}
`;
