import styled from "theme/styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 15vh;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.white};
`
export const HeaderContent = styled.div`
`
export const HeaderText = styled.h1`
  font-family: ${({theme}) => theme.fontFamily.secondary};
  color: ${({theme}) => theme.colors.dodgerBlue};

  @media (max-width: 960px) {
    font-size: 24px;
}
`;