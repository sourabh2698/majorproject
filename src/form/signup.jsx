import React from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'




class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      username: '',
      useremail: '',
      usernumber: '',
      userpassword: '',
    }
  }
  getUsername = (e) => {
    this.setState({ username: e.target.value })
  }
  getUserEmail = (e) => {
    this.setState({ useremail: e.target.value })
  }
  getUserPassword = (e) => {
    this.setState({ userpassword: e.target.value })
  }
  getUserNumber = (e) => {
    this.setState({ usernumber: e.target.value })
  }

  setValue = () => {
    if (
      this.state.username.trim(),
      this.state.useremail.trim(),
      this.state.userpassword.trim(),
      this.state.usernumber.trim()

    ) {
      let obj = {
        username: this.state.username,
        userpassword: this.state.userpassword,
        useremail: this.state.useremail,
        usernumber: this.state.usernumber,
      }

      axios.post("http://localhost:8080/userlogin", obj)
        .then((res) => {

          console.log(res.data);
          this.state.history.push("/")
          console.log('redirect to homepage')
          })

        

    }
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
      <Container  >

        <Row className="justify-content-md-center"  >
          <Col >
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}>

              <Form.Group controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter fullname"
                  onChange={this.getUsername}
                  value={this.state.username} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="useremail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.getUserEmail}
                  value={this.state.useremail} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={this.getUserPassword}
                  value={this.state.userpassword}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="usernumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter mobile number"
                  onChange={this.getUserNumber}
                  value={this.state.usernumber}
                />
                <Form.Text className="text-muted">
                  We'll never share your details with anyone else.
                 </Form.Text>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Button variant="primary" onClick={this.setValue}>
                <a href="/" style={{ color: "#fff" }}>
                Submit
                </a>
               </Button>
            </Form>
          </Col>


        </Row><br />
      </Container>
    )
  }
}


export default SignUp;
