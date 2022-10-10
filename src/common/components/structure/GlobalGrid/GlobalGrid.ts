import styled, { css } from 'styled-components';

export const GlobalGrid = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 64px 1fr 115px;
    grid-template-areas: 'header' '.' 'footer';
    height: 100vh;

    header {
      grid-area: header;
    }

    footer {
      grid-area: footer;
    }
  `}
`;
