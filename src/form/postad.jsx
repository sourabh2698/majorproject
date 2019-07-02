import React from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { Paper } from '@material-ui/core';
import axios from 'axios'
import * as firebase from 'firebase/app';
import "firebase/auth";
import FullWidthTabs from './signuptab';
import LoginDialog from './loginbutton';



class PostAd extends React.Component {
    constructor(props) {
        super(props);
        this.loginCheck();
        this.state = {
            validated: false,
            title: "",
            description: "",
            // category: "",
            oldprice: "",
            newprice: "",
            fullname: "",
            number: "",
            cityname: "",
            collegename: "",

        };
        
    }

    getTitleChange = (e) => {
        this.setState(
            { title: e.target.value }
        )
    }

    getDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }

    getCategoryChange = (e) => {
        this.setState({ category: e.target.value })
    }

    getoldpriceChange = (e) => {
        this.setState({ oldprice: e.target.value })
    }

    getnewpriceChange = (e) => {
        this.setState({ newprice: e.target.value })
    }
    getnameChange = (e) => {
        this.setState({ fullname: e.target.value })
    }

    getNumberChange = (e) => {
        this.setState({ number: e.target.value })
    }
    CollegeNameChange = (e) => {
        this.setState({ collegename: e.target.value })
    }
    CityNameChange = (e) => {
        this.setState({ cityname: e.target.value })
    }
    setValue = (e) => {
        e.preventDefault();
        if (
            this.state.title.trim(),
            this.state.description.trim(),
            this.state.newprice.trim(),
            this.state.oldprice.trim()

        ) {
            let obj = {
                title: this.state.title,
                description: this.state.description,
                category: this.state.category,
                oldprice: this.state.oldprice,
                newprice: this.state.newprice,
                image: this.state.image,
                fullname: this.state.fullname,
                number: this.state.number,
                cityname: this.state.cityname,
                collegename: this.state.collegename,

            }

            axios.post("http://localhost:8080/postad", obj)
                .then((res) => {

                    console.log(res.data);
                    this.props.history.push("/")
                    console.log('redirect to homepage')
                    //   this.getData();
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

    //----------------//-------------------//
    //For user profile picuture firebase auth
    googleLogin() {
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

    loginCheck() {
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
    logOut() {
        firebase.auth().signOut().then(() => {
            this.setState({
                user: ""
            })
        }).catch(function (error) {
            // An error happened.
        });
    }

    //----------//----------------------------//
    //Firebase file upload
    //----------------------//-------------------------------//
    fileUpload(e) {
        console.log(e.target.files[0])
        let fd = new FormData()
        fd.append("file", e.target.files[0])

        axios.post("http://localhost:8080/adimages", fd, {
            headers: {
                'Content-Type': "multipart/form-data"
            }
        }).then((res) => {
            console.log(res.data);
            this.setState({
                image: res.data
            })
        })


    }

    fileUploadFirebase(e) {
        console.log(e.target.files[0])
        var storageRef = firebase.storage().ref();

        // Create a reference to 'images/mountains.jpg'
        var mountainImagesRef = storageRef.child('images/mountain.jpg');


        mountainImagesRef.put(e.target.files[0]).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
        });
    }

    //********************************************//************************//


    render() {
        const { validated } = this.state;

        return (
            <div>
                <Paper md={12} style={{ marginLeft: "auto", marginRight: "auto", width: '50%', padding: 20 }}>
                    <h3 align="center">Submit Ad</h3><br />

                    <span style={{ display: "flex" }}><hr style={{ height: 5, width: '50%' }} /> <p style={{ width: "20%" }}>Product Details</p><hr style={{ height: 5, width: '50%' }} /></span>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={e => this.handleSubmit(e)}
                    >

                        <Form.Group md="4" controlId="validationCustom01">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter title"
                                onChange={this.getTitleChange}
                                value={this.state.title}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter Description</Form.Label>
                            <Form.Control as="textarea" rows="3"
                                required
                                type="text"
                                placeholder="enter Description"
                                onChange={this.getDescriptionChange}
                                value={this.state.description} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        {/* <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="enter title"
                            onChange={this.getCategoryChanges}
                            value={this.state.categorys}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group> */}

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridnewprice">
                                <Form.Label>Old Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter old price"
                                    onChange={this.getoldpriceChange}
                                    value={this.state.oldprice}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridoldprice">
                                <Form.Label>New Price</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Enter new price"
                                    onChange={this.getnewpriceChange}
                                    value={this.state.newprice} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={2}>
                                Category
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Check
                                    type="radio"
                                    label="Like New"
                                    name="radio"
                                    id="radio1"
                                    onChange={this.getCategoryChange}
                                    value="Like New"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Good"
                                    name="radio"
                                    id="radio2"
                                    onChange={this.getCategoryChange}
                                    value="Good"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Poor"
                                    name="radio"
                                    id="radio3"
                                    onChange={this.getCategoryChange}
                                    value="Poor"
                                />
                            </Col>
                        </Form.Group>


                        <Form.Group>
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <div>
                            <input type="file" onChange={(e) => { this.fileUpload(e) }}></input>
                        </div><br />
                        <span style={{ display: "flex" }}><hr style={{ height: 5, width: '50%' }} />
                            <p style={{ width: "20%" }}>personal Details</p><hr style={{ height: 5, width: '50%' }} /></span><br />

                        <Form.Group md="4" controlId="fullname">
                            <Form.Label>Name </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter your full name"
                                onChange={this.getnameChange}
                                value={this.state.fullname}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group md="4" controlId="number">
                            <Form.Label>Phone Number </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter phone number"
                                onChange={this.getNumberChange}
                                value={this.state.number}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" controlId="collegename">
                            <Form.Label>College Name </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter your College Name"
                                onChange={this.CollegeNameChange}
                                value={this.state.collegename}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group md="4" controlId="cityname">
                            <Form.Label>City </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="enter your city name"
                                onChange={this.CityNameChange}
                                value={this.state.cityname}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <br /><hr />
                        <div>
                            {this.state.user ?
                                <div>
                                    {/* <a href="/" style={{ color: "#fff" }}> */}
                                        <Button onClick={this.setValue}>
                                            Submit Ad
                                        </Button>
                                    {/* </a> */}
                                </div> : <Button onClick={()=>alert('please login to continue')}>Submit Ad</Button>}
                        </div>

                    </Form>
                </Paper>

            </div>
        );
    }
}

export default PostAd;