import { ModalContainer, Overlay, Close, ModalImage } from './Modal.styles';
import ReactDom from 'react-dom';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  imageRef: any;
}

const Modal = ({ open, onClose, imageRef }: ModalProps) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <Overlay>
      <Close onClick={onClose}>X</Close>
      <ModalContainer>
        <ModalImage ref={imageRef}></ModalImage>
      </ModalContainer>
    </Overlay>,
    document.getElementById('portal') as HTMLElement,
  );
};

export default Modal;
