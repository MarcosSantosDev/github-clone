import styled, { css } from 'styled-components';

export const Img = styled.img`
  ${({ theme, width = 'auto', height = 'auto' }) => css`
    border-radius: ${theme.radius.circle};
    width: ${width};
    height: ${height};
    background-size: cover;
  `}
`;
