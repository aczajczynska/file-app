import { FC } from 'react';
import { UploadFileContainer } from './UploadFileSection.styles';
import UploadFile from '../../components/DropContent/UploadFIle/UploadFile';

const UploadFileSection: FC = () => {
  return (
    <UploadFileContainer>
      <UploadFile />
    </UploadFileContainer>
  );
};

export default UploadFileSection;
