import * as React from 'react';

import { loader } from '@/common/icons/loader';

import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({
  children,
  icon,
  ...restProps
}: React.PropsWithChildren<ButtonProps>) => {
  if (icon) {
    return (
      <S.Button {...restProps}>
        <S.ButtonWithIcon>
          {icon.side === 'left' ? loader(icon.name, icon.size || 16) : null}
          {children}
          {icon.side === 'right' ? loader(icon.name, icon.size || 16) : null}
        </S.ButtonWithIcon>
      </S.Button>
    );
  }

  return <S.Button {...restProps}>{children}</S.Button>;
};
