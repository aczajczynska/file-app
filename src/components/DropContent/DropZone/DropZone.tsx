import { FC, useState } from 'react';
import Upload from '../../../assets/images/upload.png';
import { SelectedFiles } from '../../../namespace/files';
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
} from './DropZone.styles';

interface IProps {}

const DropZone: FC<IProps> = () => {
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dragOver = (ev: any) => {
    ev.preventDefault();
  };

  const dragEnter = (ev: any) => {
    ev.preventDefault();
  };

  const dragLeave = (ev: any) => {
    ev.preventDefault();
  };

  const validateFile = (file: any) => {
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

  const handleFiles = (files: any) => {
    for (let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        // add to an array so we can display the name of file
      } else {
        // add a new property called invalid
        files[i]['invalid'] = true;
        // add to the same array so we can display the name of the file
        setSelectedFiles((prevArray: any) => [...prevArray, files[i]]);
        // set error message
        setErrorMessage('File type not permitted');
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
        <FileStatusBar>
          <>
            <FileInfo>
              <FileTypeLogo src={Upload} />
              <FileName>dknckwennew.png</FileName>
              <FileSize>(534 KB)</FileSize>
              <FileErrorMessage>(File type not permitted)</FileErrorMessage>
            </FileInfo>
            <FileRemove>X</FileRemove>
          </>
        </FileStatusBar>
      </FileDisplayContainer>
    </DropContainer>
  );
};

export default DropZone;
