import { ButtonHTMLAttributes } from 'react';
import { css } from 'styled-components';
import styled from 'theme/styled-components';
import { Themed } from 'namespace/theme';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Themed {
  option?: 'primary' | 'secondary' | 'disable' | 'success';
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;

  ${({ theme }: ButtonProps) =>
    css`
      background-color: ${theme.colors.dodgerBlue};
      color: ${theme.colors.white};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize.tinyXs};

      @media (min-width: 767px) {
        font-size: ${theme.fontSize.tiny};
      } ;
    `}

  ${({ option, theme }: ButtonProps) =>
    option === 'primary' &&
    css`
      border: 2px solid ${theme.colors.dodgerBlue};
      padding: 8px;
      background-color: ${theme.colors.white};
      color: ${theme.colors.dodgerBlue};
    `}

  ${({ option, theme }: ButtonProps) =>
    option === 'secondary' &&
    css`
      background-color: ${theme.colors.dodgerBlue};
      color: ${theme.colors.black};
    `}

    ${({ option, theme }: ButtonProps) =>
    option === 'disable' &&
    css`
      background-color: ${theme.colors.silverChalice};
      color: ${theme.colors.grey};
    `}

    ${({ option, theme }: ButtonProps) =>
    option === 'success' &&
    css`
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
    `}
`;
