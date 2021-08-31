import React from 'react';
import { ButtonComponent } from './Button.styles';

interface ButtonProps {
  label: string;
  option?: 'primary' | 'secondary' | 'disable' | 'success';
}

export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <>
      <ButtonComponent {...props}>{label}</ButtonComponent>
    </>
  );
};
