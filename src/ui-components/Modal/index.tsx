import { useEffect } from "react";
import ReactDom from "react-dom";
import { ModalContainer, Overlay, Close, ModalImage } from "./Modal.styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imageRef: any;
}

const Modal = ({ open, onClose, imageRef }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!open) return null;

  return ReactDom.createPortal(
    <Overlay>
      <Close onClick={onClose}>X</Close>
      <ModalContainer>
        <ModalImage ref={imageRef}></ModalImage>
      </ModalContainer>
    </Overlay>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
