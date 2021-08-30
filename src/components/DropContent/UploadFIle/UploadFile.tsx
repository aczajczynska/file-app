import DropZone from '../DropZone/DropZone';
import { Container, Col, Row } from 'react-bootstrap';
import { UploadFileContaner, Title } from './UploadFile.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

// const UploadFile = (): JSX.Element => {
//   return (
//     <UploadFileContaner>
//       <Title>Drag and Drop File to Upload</Title>
//       <DropZone />
//     </UploadFileContaner>
//   );
// };

// export default UploadFile;

const UploadFile = (): JSX.Element => {
  return (
    <Container className='contact-content'>
      <Row>
        <Col>
          <Title>Drag and Drop File to Upload</Title>
        </Col>
      </Row>
      <Col>
        <DropZone />
      </Col>
    </Container>
  );
};

export default UploadFile;
