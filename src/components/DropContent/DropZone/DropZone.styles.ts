import styled from "theme/styled-components";

export const DropContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 4px dashed ${({ theme }) => theme.colors.islandMoment};
`;

export const DropText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  @media (max-width: 580px) {
    font-size: 14px;
  }
`;

export const FileInput = styled.input``;

export const UploadImg = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 580px) {
    width: 35px;
    height: 35px;
  }
`;

export const FileDisplayContainer = styled.div`
  margin-top: 15px;

  @media (max-width: 580px) {
    margin-top: 10px;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FileStatusBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const FileTypeLogo = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 7px;
`;

export const FileName = styled.span`
  padding-right: 7px;

  @media (max-width: 580px) {
    font-size: 11px;
  }
`;

export const FileType = styled(FileName)`
  text-transform: uppercase;
`;

export const FileSize = styled(FileName)``;

export const FileErrorMessage = styled(FileName)`
  color: red;
`;

export const FileRemove = styled.div`
  cursor: pointer;
`;

// modal

export const Modal = styled.div`
  z-index: 999;
  display: none;
  overflow: hidden;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.66);
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: none;
`;

export const Close = styled.span`
  position: absolute;
  top: 12px;
  right: 30px;
  color: #f1f1f1;
  font-size: 25px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
`;
