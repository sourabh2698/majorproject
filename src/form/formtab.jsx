import React from 'react'
import { Tabs, Tab, Form, Button, Row, Col, Container, Modal, ModalBody } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../form/login'
import SignUp from '../form/signup'



class ControlledTabs extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      key: 'home',
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Login
          </Button>
        <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton>
            College Adda
          </Modal.Header>
          <Modal.Body>
            <Container>



              <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
              >

                <Tab eventKey="home" title="Login">
                  <Login/>
                </Tab>


                <Tab eventKey="profile" title="Sign-up">
                  <SignUp/>
                  
                </Tab>

              </Tabs>



            </Container>
          </Modal.Body>
          <Modal.Footer>
          <Link>Dont have an account ?</Link>
                    </Modal.Footer>

        </Modal>


      </div>
    );
  }
}

export default ControlledTabs;