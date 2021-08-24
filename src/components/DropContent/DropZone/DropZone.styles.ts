import styled from "theme/styled-components";

export const DropContainer = styled.div`
    background-color: yellow;
    width: 850px;

      @media (max-width: 960px ) {
        width: 550px;
    };

     @media (max-width: 580px ) {
        width: 350px;
    };

`;

export const DropContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 4px dashed ${({ theme }) => theme.colors.dodgerBlue};
`;

export const DropText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};

   @media (max-width: 580px ) {
        font-size: 14px;
    };
`;

export const UploadImg = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 580px ) {
        width: 35px;
        height: 35px;
    };
`;

export const FileDisplayContainer = styled.div`
  margin-top: 15px;
  background-color: pink;

  @media (max-width: 580px ) {
        margin-top: 10px;
    };
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const FileStatusBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

`;

export const FileTypeLogo = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 7px;
`;

export const FileName = styled.span`
  padding-right: 7px;

    @media (max-width: 580px ) {
        font-size: 11px;
    };
`;

export const FileType = styled(FileName)`
  text-transform: uppercase;
`

export const FileSize = styled(FileName)``;

export const FileErrorMessage = styled(FileName)`
    color: red;
`;

export const FileRemove = styled(FileName)`
  padding-right: 0;
`;





