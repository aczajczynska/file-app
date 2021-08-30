import styled from "theme/styled-components";

export const UploadFileContaner = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.dodgerBlue};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding-bottom: 50px;
  padding-top: 50px;
  text-align: center;
`;
