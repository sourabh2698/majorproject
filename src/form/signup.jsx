import React from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class SignUp extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container  >
        
        <Row className="justify-content-md-center"  >
          <Col >
            <Form>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter mobile number" />
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                 </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
    </Button>
            </Form>
          </Col>


        </Row><br/>
      </Container>
    )
  }
}


export default SignUp;
