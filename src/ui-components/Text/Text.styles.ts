import styled from 'theme/styled-components'
import { css } from 'styled-components'
import { Themed } from 'namespace/theme'

interface TextProps extends Themed {
  option: 'title' | 'subtitle' | 'content' | 'text' | 'whiteTitle'
  center?: boolean
}

export const Txt = styled.h1<TextProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 960px) {
    font-size: 24px;
  }

  ${({ option, theme }: TextProps) =>
    option === 'title' &&
    css`
      color: ${theme.colors.islandMoment};
    `}

  ${({ option, theme }: TextProps) =>
    option === 'whiteTitle' &&
    css`
      color: ${theme.colors.white};
    `}

    ${({ option, theme }: TextProps) =>
    option === 'subtitle' &&
    css`
      color: ${theme.colors.islandMoment};
      font-size: ${theme.fontSize.huge};

      @media (max-width: 680px) {
        font-size: ${theme.fontSize.small};
      }
    `}

     ${({ option, theme }: TextProps) =>
    option === 'content' &&
    css`
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.small};

      @media (max-width: 680px) {
        font-size: ${theme.fontSize.tiny};
      }
    `}

    ${({ option, theme }: TextProps) =>
    option === 'text' &&
    css`
      color: ${theme.colors.black};
      font-size: ${theme.fontSize.tiny};
    `}

    ${({ center }: TextProps) =>
    center &&
    css`
      text-align: center;
    `}
`
