import styled, { css } from 'styled-components';

type ColoredCircleStyledProps = {
  color: string;
};

export const ColoredCircleDiv = styled.div<ColoredCircleStyledProps>`
  ${({ color }) => css`
    width: 12px;
    height: 12px;
    background-color: ${color};
    border-radius: 50%;
  `}
`;

export const Paragraph = styled.p`
  font-size: 12px;
  color: #8b949e;
  margin: 0;
`;

export const RepositoryContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    '. projectActions'
    '. projectActions'
    '. projectActions';
  row-gap: 12px;
  padding: 24px 0;
  height: min-content;
  box-sizing: border-box;
  border-top: 1px solid #373e47;
`;

export const RepositoryCoreInfoWrapperDiv = styled.div``;

export const RepositoryNameContentDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.375rem;
`;

export const RepositoryTopicWrapperDiv = styled.div`
  display: flex;
  column-gap: 0.125rem;
`;

export const RepositorySummaryWrapperDiv = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`;

export const SummaryContainerDiv = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 4px;
  line-height: 1;
`;

export const ActionWrapperInRepositoryDiv = styled.div`
  grid-area: projectActions;

  width: 400px;
`;
