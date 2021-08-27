import { FC, useState, useEffect, useRef, useLayoutEffect } from 'react';
import Upload from '../../../assets/images/upload.png';
import {
  SelectedFilesProps,
  SelectedFileProps,
} from '../../../namespace/files';
import {
  DropContainer,
  DropContent,
  DropText,
  UploadImg,
  FileDisplayContainer,
  FileStatusBar,
  FileInfo,
  FileTypeLogo,
  FileName,
  FileSize,
  FileRemove,
  FileErrorMessage,
  FileType,
  //
  Modal,
  Overlay,
  Close,
  ModalImage,
} from './DropZone.styles';

interface IProps {}

const DropZone: FC<IProps> = () => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesProps>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validFiles, setValidFiles] = useState<SelectedFilesProps>([]);
  const modalImageRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const dragOver = (ev: any) => {
    ev.preventDefault();
  };

  const dragEnter = (ev: any) => {
    ev.preventDefault();
  };

  const dragLeave = (ev: any) => {
    ev.preventDefault();
  };

  useEffect(() => {
    let filteredArray = selectedFiles.reduce((file: any, current: any) => {
      const x = file.find((item: any) => item.name === current.name);
      if (!x) {
        return file.concat([current]);
      } else {
        return file;
      }
    }, []);
    setValidFiles([...filteredArray]);
  }, [selectedFiles]);

  const validateFile = (file: SelectedFileProps) => {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/x-icon',
    ];
    if (validTypes.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const handleFiles = (files: SelectedFilesProps) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
        setSelectedFiles((prevArray: any) => [...prevArray, files[i]]);
      } else {
        setErrorMessage('File type not permitted');
        // add a new property called invalid
        files[i]['invalid'] = true;
        // add to the same array so we can display the name of the file
        setSelectedFiles((prevArray: any) => [...prevArray, files[i]]);
      }
    }
  };

  const fileDrop = (ev: any) => {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
    if (files.length) {
      handleFiles(files);
    }
    console.log(files);
  };

  console.log(selectedFiles, 'selectedFiles');
  console.log(validFiles, 'validFiles');

  const fileSize = (size: number) => {
    if (size === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const fileType = (fileName: string) => {
    return (
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) ||
      fileName
    );
  };

  const removeFile = (name: string) => {
    const validFileIndex = validFiles.findIndex((e) => e.name === name);
    validFiles.splice(validFileIndex, 1);
    setValidFiles([...validFiles]); //update

    const selectedFileIndex = selectedFiles.findIndex((e) => e.name === name);
    selectedFiles.splice(selectedFileIndex, 1);
    setSelectedFiles([...selectedFiles]); //update
  };

  const reader = new FileReader();

  const openImageModal = (file: any) => {
    if (null !== modalRef.current) {
      modalRef.current.style.display = 'block';
      reader.readAsDataURL(file);
      reader.onload = function (e: any) {
        if (null !== modalImageRef.current) {
          modalImageRef.current.style.backgroundImage = `url(${e.target.result})`;
        }
      };
    }
  };

  const closeModal = () => {
    if (null !== modalRef.current && null !== modalImageRef.current) {
      modalRef.current.style.display = 'none';
      modalImageRef.current.style.backgroundImage = 'none';
    }
  };

  return (
    <DropContainer>
      <DropContent
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <UploadImg src={Upload} />
        <DropText>Drag and Drop files here or click to select files.</DropText>
      </DropContent>
      <FileDisplayContainer>
        {validFiles.map((data: any, i: any) => (
          <FileStatusBar key={i}>
            <>
              <div
                onClick={
                  !data.invalid
                    ? () => openImageModal(data)
                    : () => removeFile(data.name)
                }
              >
                <FileInfo>
                  <FileTypeLogo src={Upload} />
                  <FileName>{data.name}</FileName>
                  <FileType>{fileType(data.name)}</FileType>
                  <FileSize>{fileSize(data.size)}</FileSize>
                  {data.invalid && (
                    <FileErrorMessage>{errorMessage}</FileErrorMessage>
                  )}
                </FileInfo>
              </div>
              <FileRemove onClick={() => removeFile(data.name)}>X</FileRemove>
            </>
          </FileStatusBar>
        ))}
      </FileDisplayContainer>
      <Modal ref={modalRef}>
        <Overlay></Overlay>
        <Close onClick={() => closeModal()}>X</Close>
        <ModalImage ref={modalImageRef}></ModalImage>
      </Modal>
    </DropContainer>
  );
};

export default DropZone;
