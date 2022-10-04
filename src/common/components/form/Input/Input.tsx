import * as React from 'react';
import * as S from './Input.styles';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return <S.Input {...props} />;
};

export default Input;
