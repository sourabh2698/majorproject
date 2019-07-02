import React, { Component } from 'react'
import { Modal, Button,Nav } from 'react-bootstrap'
import FullWidthTabs from './signuptab';

class LoginDialog extends React.Component {
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
            <>
                <span variant="primary" onClick={this.handleShow}>
                    Login
          </span>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>College Adda</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                      <FullWidthTabs></FullWidthTabs>
                        
                    
                    </Modal.Body>
                    <Modal.Footer>
                        <p>* all fields are mandatory</p>
                        
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default LoginDialog
