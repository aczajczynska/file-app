import React, { FC } from 'react';
import Upload from '../../../assets/images/upload.png';
import {
  DropContainer,
  DropContent,
  DropText,
  UploadImg,
} from './DropZone.styles';

interface IProps {}

const DropZone: FC<IProps> = () => {
  //   const handlePrevent = (ev) => {
  //     ev.preventDefault();
  //   };

  //   const handleDropFiles = (files) => {};

  const dragOver = (ev: any) => {
    ev.preventDefault();
  };

  const dragEnter = (ev: any) => {
    ev.preventDefault();
  };

  const dragLeave = (ev: any) => {
    ev.preventDefault();
  };

  const fileDrop = (ev: any) => {
    ev.preventDefault();
    const files = ev.dataTransfer.files;
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
    </DropContainer>
  );
};

export default DropZone;
