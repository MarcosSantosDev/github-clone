import { Link as LinkReactRouterDom } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(LinkReactRouterDom)`
  text-decoration: none;
  color: #539bf5;

  :hover {
    text-decoration: underline;
  }
`;
