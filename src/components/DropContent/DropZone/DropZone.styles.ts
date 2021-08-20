import styled from "theme/styled-components";

export const DropContainer = styled.div``;

export const DropContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 850px;
    height: 200px;
    border: 4px dashed ${({ theme }) => theme.colors.dodgerBlue};

    @media (max-width: 960px ) {
        width: 550px;
    };

     @media (max-width: 580px ) {
        width: 300px;
        height: 150px;
    };

`;

export const DropText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const UploadImg = styled.img`
  width: 50px;
  height: 50px;
`;