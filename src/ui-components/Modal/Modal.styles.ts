import styled from "theme/styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 50px;
  z-index: 1000;
  width: 50%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
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
