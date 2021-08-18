import styled from "theme/styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 1;
  background-color: ${({theme}) => theme.colors.moonDark};

`
export const HeaderContent = styled.div`
`

export const HeaderText = styled.h1`
  font-family: ${({theme}) => theme.fontFamily.secondary};
`;