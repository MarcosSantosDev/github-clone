import styled, { css } from 'styled-components';

import { Img } from '@/common/components/structure';

export const ContainerDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    height: 100%;
    border-bottom: 1px solid ${theme.border.colors.secondary};
    padding: 0px 32px;
    z-index: 3;
  `}
`;

export const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: 100%;
`;

export const ProfileNameSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #adbac7;
  white-space: nowrap;
`;

export const ProfileImg = styled(Img)`
  margin-right: 10px;
  width: 35px;
`;

export const TabOptionsDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
