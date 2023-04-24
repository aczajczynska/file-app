import styled from 'theme/styled-components'

export const HeaderText = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.colors.islandMoment};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.normal};

  @media (max-width: 960px) {
    font-size: 24px;
  }
`
