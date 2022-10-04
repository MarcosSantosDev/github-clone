import * as React from 'react';
import * as S from './Button.styles';

export type Sizes = 'small' | 'medium' | 'large';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  size?: Sizes;
};

const Button = ({ children, size = 'small', ...props }: ButtonProps) => {
  return (
    <S.Button {...props} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
