import { css } from 'styled-components';
import styled from 'theme/styled-components';
import { Themed } from 'namespace/theme';
import { WithChildrenProps } from 'namespace/render'

interface PaginationContentProps extends Themed, WithChildrenProps{
  isCurrent: boolean;
}

export const PaginationCore = styled.div<Themed & WithChildrenProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

export const PaginationContent = styled.div<PaginationContentProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 120%;

   ${({ theme }: Themed) =>
    css`
      font-size: ${theme.fontSize.tinyXs};
      font-weight: ${theme.fontWeight.light};
      color: ${theme.colors.black};
      padding: ${theme.spacing.tiny};
    `}

    ${({ isCurrent, theme }: PaginationContentProps) =>
    isCurrent &&
    css`
      font-weight: ${theme.fontWeight.semiBold};
      color: ${theme.colors.dodgerBlue};
      border: 2px solid ${theme.colors.blueLight};
      border-radius: 50%;
      background: ${theme.colors.blueLight};
      width: 30px;
      height: 30px;
    `}
`