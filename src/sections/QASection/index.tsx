import React from 'react'
import { QASection, HeaderQAContainer } from './QASection.styles'
import BootstrapAccordion from './BootstrapAccordion'
import { Container, Col, Row } from 'react-bootstrap'
import Text from '../../ui-components/Text'
import 'bootstrap/dist/css/bootstrap.min.css'

const QAComponent = () => {
  return (
    <QASection>
      <Container className="contact-contxent">
        <Row>
          <Col>
            <HeaderQAContainer>
              <Text center option="whiteTitle" content="Q&A Section" />
            </HeaderQAContainer>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <BootstrapAccordion />
          </Col>
        </Row>
      </Container>
    </QASection>
  )
}

export default QAComponent
