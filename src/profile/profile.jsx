import React, { Component } from 'react'
import * as firebase from 'firebase/app'
import "firebase/auth";
import { Paper } from '@material-ui/core';
import { Form, Row, Col } from 'react-bootstrap'



export class Profile extends Component {
    constructor(props) {
        super(props)
        this.checkLogin();
        this.state = {}
    }


    //----------------//-------------------//
    //For user profile picuture firebase auth
    googleLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();


        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            this.setState(
                { user: user }
            )
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

    checkLogin = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState(
                    { user: user }
                )
              

            } else {
                // No user is signed in.
            }
        });
    }

    logout = () => {
        firebase.auth().signOut().then(() => {
            this.setState(
                { user: null }
            )
            this.props.history.push("/")
        }).catch(function (error) {
            // An error happened.
        });
    }
    //----------//----------------------------//





    render() {
        return (
            <Paper style={{ height: 520, margin: 30 }}>
                <div style={{ display: "flex" }}>
                    <span style={{ padding: 10 }} >
                        <h3>My Profile:</h3><br/>
                        {this.state.user ?
                            <div>

                                <Form>
                                    <Form.Group as={Row} controlId="formPlaintextEmail">
                                        <Form.Label column sm="2">
                                            Name: 
                                        </Form.Label>
                                        <Col sm="10">
                                            <Form.Control  readOnly defaultValue={this.state.user.displayName} style={{width:300}} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formPlaintextEmail" >
                                        <Form.Label column sm="2">
                                            Email: 
                                        </Form.Label>
                                        <Col sm="10" >
                                            <Form.Control  readOnly defaultValue={this.state.user.email} style={{width:300}}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div> : null}

                    </span>
                    <div style={{ marginLeft: "auto",padding:10}} >

                        {this.state.user ?
                            <div >
                                <img src={this.state.user.photoURL} style={{ borderRadius: "50%" }}></img>

                            </div> : null}

                    </div>
                </div>
            </Paper>
        )
    }
}

export default Profile
