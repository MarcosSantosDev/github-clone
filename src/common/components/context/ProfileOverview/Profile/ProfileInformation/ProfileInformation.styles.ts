import styled, { css } from 'styled-components';

import { Img } from '@/common/components/structure';

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content auto auto;
  justify-items: center;
`;

export const ProfileImageContainerDiv = styled.div`
  position: relative;

  width: 296px;
  height: 260px;
`;

export const AvatarImg = styled(Img)`
  ${({ theme }) => css`
    position: absolute;
    top: -40px;
    z-index: 4;

    width: 296px;
    height: 296px;
    border: 2px solid ${theme.border.colors.main};
  `}
`;

export const NamesContainerDiv = styled.div`
  z-index: 1;

  display: grid;
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const NameP = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
`;

export const LoginP = styled.p`
  margin: 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #768390;
`;
