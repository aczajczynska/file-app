import React from 'react';
import { ButtonComponent } from './Button.styles';

interface ButtonProps {
  label: string;
  option?: 'primary' | 'secondary' | 'disable' | 'success';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button = ({
  onClick,
  label,
  size,
  option,
  ...props
}: ButtonProps) => {
  return (
    <>
      <ButtonComponent onClick={onClick} option={option} size={size} {...props}>
        {label}
      </ButtonComponent>
    </>
  );
};
