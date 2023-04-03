import styled, { css } from 'styled-components';

import { Img } from '@/common/components/structure';

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  row-gap: 16px;
  max-width: inherit;
`;

const alignAvatarToTop = 40;

export const ProfileImageContainerDiv = styled.div`
  position: relative;
  width: 296px;
  height: calc(296px - ${alignAvatarToTop}px);
  margin: 0 auto;
`;

export const AvatarImg = styled(Img)`
  ${({ theme }) => css`
    position: absolute;
    top: -${alignAvatarToTop}px;
    z-index: 4;

    width: 296px;
    height: 296px;
    border: 2px solid ${theme.colors.border.normal[3]};
  `}
`;

export const InformationContainerDiv = styled.div``;

export const NameP = styled.p`
  margin: 0px;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
`;

export const LoginP = styled.p`
  ${({ theme }) => css`
    margin: 0px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.text.normal[4]};
  `}
`;

export const BiographyP = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: normal;
`;
