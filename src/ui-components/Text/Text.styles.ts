import styled from "theme/styled-components";
import { css } from 'styled-components';
import { Themed } from 'namespace/theme';

interface TextProps extends Themed {
  option: 'title' | 'subtitle' | 'content';
}

export const Txt = styled.h1<TextProps>`
  font-family: ${({theme}) => theme.fontFamily.secondary};
  color: ${({theme}) => theme.colors.black};

  @media (max-width: 960px) {
    font-size: 24px;
}

${({ option, theme }: TextProps) =>
    option === 'title' &&
    css`
      color: ${theme.colors.dodgerBlue};
    `}

`;