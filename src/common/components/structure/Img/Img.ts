import styled, { css } from 'styled-components';

export const Img = styled.img`
  ${({ width = 'auto', height = 'auto' }) => css`
    border-radius: 50%;
    width: ${width};
    height: ${height};
    background-size: cover;
  `}
`;
