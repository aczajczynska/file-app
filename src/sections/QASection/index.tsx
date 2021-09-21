import React from 'react';
import { QASection, HeaderQAContainer } from './QASection.styles';
import { Container, Col, Row } from 'react-bootstrap';
import Text from '../../ui-components/Text';
import 'bootstrap/dist/css/bootstrap.min.css';

const QAComponent = () => {
  return (
    <QASection>
      <Container className='contact-content'>
        <Row>
          <Col>
            <HeaderQAContainer>
              <Text center option='title' content='Q&A Section' />
            </HeaderQAContainer>
          </Col>
        </Row>
      </Container>
    </QASection>
  );
};

export default QAComponent;
