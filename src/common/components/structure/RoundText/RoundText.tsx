import * as React from 'react';

import { Link } from '@/common/components/structure';

import * as S from './RoundText.styles';
import type { RoundTextType, RoundTextVariant } from './RoundText.types';

export type RoundTextProps = React.HTMLAttributes<HTMLDivElement> & {
  content: string;
  type: RoundTextType;
  variant: RoundTextVariant;
  linkURL?: string;
};

export const RoundText = ({
  content,
  type,
  linkURL = '/',
  ...restProps
}: RoundTextProps) => {
  const RoundTextComponent = (
    <S.RoundTextContainerDiv {...restProps} type={type}>
      <span>{content}</span>
    </S.RoundTextContainerDiv>
  );

  if (type === 'link') {
    return (
      <Link to={linkURL} disableUnderline>
        {RoundTextComponent}
      </Link>
    );
  }

  return RoundTextComponent;
};
