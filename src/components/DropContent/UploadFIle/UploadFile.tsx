import DropZone from '../DropZone/DropZone';
import { UploadFileContaner, Title } from './UploadFile.styles';

const UploadFile = (): JSX.Element => {
  return (
    <UploadFileContaner>
      <Title>Drag and Drop File to Upload</Title>
      <DropZone />
    </UploadFileContaner>
  );
};

export default UploadFile;
