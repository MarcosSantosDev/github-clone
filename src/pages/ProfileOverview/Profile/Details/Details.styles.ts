import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);
  row-gap: 16px;
  width: 296px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-rows: 1fr;
  row-gap: 6px;
`;

export const Li = styled.li`
  ${({ theme }) => css`
    list-style: none;

    display: flex;
    gap: 8px;
    font-size: 14px;
    color: ${theme.colors.text.normal[3]};

    span {
      word-break: break-word;
    }
  `}
`;

export const ContainerFlexDiv = styled.div`
  display: flex;
  gap: 4px;
`;
