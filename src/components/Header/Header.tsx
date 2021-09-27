import { HeaderText } from './Header.styles';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <HeaderText>Keep your memories and moments</HeaderText>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
