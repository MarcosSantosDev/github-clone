import styled from 'styled-components';

import { Container } from '@/common/components/structure';
import { Img } from '@/common/components/structure';

export const ContainerDiv = styled(Container)`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 0px 32px;
`;

export const ProfileNavigationDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s;

  &.profile-navigation-visible {
    opacity: 1;
  }
`;

export const ProfileImg = styled(Img)`
  margin-right: 10px;
  width: 35px;
`;

export const ProfileNameSpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #adbac7;
  white-space: nowrap;
`;

export const TabOptionsDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;
