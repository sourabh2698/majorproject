import React from 'react';
import { Form, Button, Row, Col, Modal, Tabs, Tab } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Login extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


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

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
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
                                <Button variant="secondary" onClick={this.handleClose} style={{marginLeft:10}}>
                            Close
                            </Button>
                            
                            </Form>
                        </Col>


                    </Row>
                </Container>



            </div>
        );
    }
}

export default Login;