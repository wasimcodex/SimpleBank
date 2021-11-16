import { Alert, Container, Row, Col } from 'react-bootstrap'

const StatusBox = ({ status }) => {
  return (
    <Container
      className={status.length === 0 ? 'status-box-null' : 'status-box'}
    >
      <Row className="justify-content-center">
        <Col lg="6">
          <Alert variant="danger">{status}</Alert>
        </Col>
      </Row>
    </Container>
  )
}

export default StatusBox
