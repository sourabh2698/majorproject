import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, NavDropdown, Nav } from 'react-bootstrap'
import Test from '../form/tab'
// import ControlledTabs from '../form/formtab'
import LoginModal from '../form/formtab';
import LoginDialog from '../form/logintab';
import GoogleLogin from './firebaselogin'
import * as firebase from 'firebase/app'
import "firebase/auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class NavBar2 extends Component {

    constructor(props) {
        super(props);
        this.loginCheck();
        this.state = {
            show: false,
        };

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

    //----------//----------------------------//

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg" style={{ height: 70 }}>
                    <Navbar.Brand href="/"><img src=".././assets/logo.jpg"
                        width="180"
                        height="65"
                        className="d-inline-block align-top"
                        alt="College Adda" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Form inline className="mr-auto">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Nav className="mr-50" style={{ marginRight: 50 }}>
                            <Nav.Link href="/" style={{ color: "#fff", fontWeight: 400, fontSize: 20 }}>Home</Nav.Link>
                            {/* <Nav.Link href="/myprofile" style={{ color: "#fff", fontWeight: 400, fontSize: 20 }}>my profile</Nav.Link> */}



                            <div style={{ color: "#fff", fontWeight: 400, fontSize: 20 }}>
                                <NavDropdown title="My profile" id="basic-nav-dropdown"  >
                                    <span align="center">{this.state.user ? <p>{this.state.user.displayName}</p> : <p> Welcome User!</p>}</span><hr />

                                    <NavDropdown.Item >
                                        <span>
                                            {this.state.user ? <Link to="myprofile" style={{ textDecoration: 'none', color: "#000" }}>My Account</Link> :
                                                <p onClick={() => { alert("please log in to Continue") }}>My Account</p>}
                                        </span></NavDropdown.Item>

                                    <NavDropdown.Item /*href="allad"*/>
                                        <span>
                                            {this.state.user ? <Link to="allad" style={{ textDecoration: 'none', color: "#000" }}>All Ad</Link> :
                                                <p onClick={() => { alert("please log in to Continue") }}>All Ad</p>}
                                        </span></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <Nav.Link href="#link" style={{ color: "#fff", fontWeight: 400, fontSize: 20, }}>
                                <span>
                                    {this.state.user ? <Button variant="light" size="md" onClick={() => { this.logOut() }}>Logout</Button> : <LoginDialog />}
                                </span>
                            </Nav.Link>
                        </Nav>
                        <div >
                            {this.state.user ?
                                <div><img src={this.state.user.photoURL}
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="College Adda"
                                    style={{ borderRadius: "50%", marginLeft: -50 }} />

                                </div> :
                                <img src=".././assets/user.png"
                                    width="60"
                                    height="60"
                                    className="d-inline-block align-top"
                                    alt="College Adda"
                                    style={{ borderRadius: "50%", marginLeft: -50 }} />
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar2;
