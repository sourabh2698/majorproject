import React from 'react';
import { Form, Button, Row, Col, Modal, Tabs, Tab } from 'react-bootstrap';
import { Container, Paper } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as firebase from 'firebase/app'
import "firebase/auth";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.loginCheck();


    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      this.setState({
        user: user
      })
      console.log(user.displayName, user.email);
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  loginCheck = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user
        })
        console.log("logged in", user)
      } else {
        console.log("logged out")
      }
    });
  }
  logOut = () => {
    firebase.auth().signOut().then(() => {
      this.setState({
        user: ""
      })
    }).catch(function (error) {
      // An error happened.
    });
  }

  render() {
    return (
      <div>
        
          <Container>
            <Row>
              <Col>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>username</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                      We'll never share your details with anyone.
                                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button variant="primary" onClick={this.handleClose}>
                    Login
                            </Button>
                  <Button variant="secondary" onClick={this.handleClose} style={{ marginLeft: 10 }}>
                    Close
                            </Button>



                </Form>
              </Col>


            </Row>
            <br /> <p style={{ marginLeft: "50%" }}>Or</p>
            {this.state.user ?
              <div>
                {/* <p>{this.state.user.displayName}</p>
                <p>{this.state.user.email}</p>
                <img src={this.state.user.photoURL}></img>
                <button onClick={() => { this.logOut() }}>Logout</button> */}
              </div> :

              <span onClick={() => { this.googleLogin() }} 
              style={{ cursor: "pointer", alignContent: "center", marginLeft: "10%" }}>
                <img src=".././assets/sign.png" style={{ width: "80%", height: "30%" }}></img></span>}


          </Container>


        
      </div>
    );
  }
}

export default Login;