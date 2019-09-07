import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Order.css';

const Order = (props) => {
  return (
    <div className='order'>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId='patName'>
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type='text' name='patName' placeholder='John Smith' />
              </Form.Group>
            </Col> 
            <Col>
              <Form.Group controlId='dob'>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type='text' name='dob' placeholder='MM/DD/YYYY' />
              </Form.Group>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='directions'>
                <Form.Label>Directions</Form.Label>
                <Form.Control type='text-area' name='directions' />
              </Form.Group>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='medication'>
                <Form.Label>Medication Name</Form.Label>
                <Form.Control type='text' name='medication' placeholder='Lisinopril' />
              </Form.Group>
            </Col> 
          </Row>
          <Row>
            <Col>
              <Form.Group controlId='quantity'>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type='number' name='quantity' />
              </Form.Group>
            </Col> 
            <Col>
              <Form.Group controlId='refills'>
                <Form.Label>Refills</Form.Label>
                <Form.Control type='number' name='refills' />
              </Form.Group>
            </Col> 
          </Row>
        </Form>
        <Button primary>Order</Button>
      </Container>
    </div>
  )
}

export default Order;