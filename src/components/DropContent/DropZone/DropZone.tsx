import { FC, useState, useEffect } from 'react';
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
} from './DropZone.styles';

interface IProps {}

const DropZone: FC<IProps> = () => {
  const [selectedFiles, setSelectedFiles] = useState<SelectedFilesProps>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [validFiles, setValidFiles] = useState<SelectedFilesProps>([]);

  const dragOver = (ev: any) => {
    ev.preventDefault();
  };

  const dragEnter = (ev: any) => {
    ev.preventDefault();
  };

  const dragLeave = (ev: any) => {
    ev.preventDefault();
  };

  // useEffect(() => {
  //   let filteredArray = selectedFiles.reduce((file, current) => {
  //     const x = file.find((item) => item.name === current.name);
  //     if (!x) {
  //       return file.concat([current]);
  //     } else {
  //       return file;
  //     }
  //   }, []);
  //   setValidFiles([...filteredArray]);
  // }, [selectedFiles]);

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
        {selectedFiles.map((data: any, i: any) => (
          <FileStatusBar key={i}>
            <>
              <FileInfo>
                <FileTypeLogo src={Upload} />
                <FileName>{data.name}</FileName>
                <FileType>{fileType(data.name)}</FileType>
                <FileSize>{fileSize(data.size)}</FileSize>
                {data.invalid && (
                  <FileErrorMessage>{errorMessage}</FileErrorMessage>
                )}
              </FileInfo>
              <FileRemove>X</FileRemove>
            </>
          </FileStatusBar>
        ))}
      </FileDisplayContainer>
    </DropContainer>
  );
};

export default DropZone;
