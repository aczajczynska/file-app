import { ButtonHTMLAttributes } from "react";
import { css } from "styled-components";
import styled from "theme/styled-components";
import { Themed } from "namespace/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, Themed {
  option?: "primary" | "secondary" | "disable" | "success";
  size?: "small" | "medium" | "large";
}

export const ButtonComponent = styled.button`
  padding: 10px;
  border: none;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.spacing.minuscule};

  ${({ theme }: ButtonProps) =>
    css`
      background-color: ${theme.colors.islandMoment};
      color: ${theme.colors.white};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize.tinyXs};

      @media (min-width: 767px) {
        font-size: ${theme.fontSize.tiny};
      }
    `}

  ${({ option, theme }: ButtonProps) =>
    option === "secondary" &&
    css`
      background-color: ${theme.colors.dodgerBlue};
      color: ${theme.colors.black};
    `}

    ${({ option, theme }: ButtonProps) =>
    option === "disable" &&
    css`
      background-color: ${theme.colors.silverChalice};
      color: ${theme.colors.grey};
    `}

      ${({ option, theme }: ButtonProps) =>
    option === "success" &&
    css`
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
    `}

     ${({ size }: ButtonProps) =>
    size === "small" &&
    css`
      width: 10%;
    `}

    ${({ size }: ButtonProps) =>
    size === "medium" &&
    css`
      width: 30%;
    `}

     ${({ size }: ButtonProps) =>
    size === "large" &&
    css`
      width: 100%;
    `}
`;
