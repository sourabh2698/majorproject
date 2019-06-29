import React, { Component } from 'react'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import { Paper } from '@material-ui/core';


class PasswordReset extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
  }

  render() {
    const { validated } = this.state;
    return (
      <Col sm={8}>
      <Paper style={{padding: 20,margin:20,borderRadius: 10,backgroundColor:"#DBF3FA"}} >
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >

          <Form.Group controlId="validationCustom01">
            <Form.Label>Enter Old Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter old password"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Enter New Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter New password"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group  controlId="validationCustom01">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Re-Enter New password"

            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Paper>
      </Col>
    );
  }
}

export default PasswordReset
