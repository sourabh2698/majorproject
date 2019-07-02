import React, { Component } from 'react'
import { Navbar, Form, FormControl, NavDropdown, Nav } from 'react-bootstrap'
import { Grid, Paper, Typography, TextField, InputAdornment, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import * as firebase from 'firebase/app'
import "firebase/auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class PartOne extends Component {

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
                console.log("logged in",user )
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
                            {/* <p>{this.state.user.email}</p> */}
                            <div>
                                <Grid container>
                                    <Grid item sm>
                                        <Paper
                                            style={{ padding: 30, marginLeft: 15, marginRight: 15, backgroundColor: '#fcf4a3', borderRadius: 10 }}>
                                            <Typography variant="h4" component="h3" align="center" >
                                                Buy | Sell | Find Anything you need<br /><br />
                                            </Typography>
            
                                            <div >
                                                <Grid container spacing={3}
                                                    direction="row"
                                                    alignItems="center"
                                                    justify="center"
                                                >
                                                    <Grid item >
                                                        <TextField
                                                            id="outlined-full-width"
                                                            label="What ?"
                                                            style={{ margin: 8 }}
                                                            placeholder="what to find"
                                                            helperText="Name of product!"
                                                            fullWidth
                                                            margin="normal"
                                                            variant="outlined"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item >
                                                        <TextField
                                                            id="outlined-full-width"
                                                            label="Where ?"
                                                            style={{ margin: 8 }}
                                                            placeholder="Where to find"
                                                            helperText="Name of your college/City!"
                                                            fullWidth
                                                            margin="normal"
                                                            variant="outlined"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>
            
                                                    <Grid item >
                                                        <TextField
                                                            id="outlined-full-width"
                                                            label="Category"
                                                            style={{ margin: 8 }}
                                                            placeholder="select category"
                                                            fullWidth
                                                            margin="normal"
                                                            variant="outlined"
                                                            helperText=" "
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid item style={{ marginBottom: 15, }} >
                                                        <Button variant="contained" color="secondary" size="large" >
                                                            Search
                                            </Button>
                                                    </Grid>
                                                    
                                                    <Grid item style={{ marginBottom: 15 }}>
                                                        <Link to="postad">
                                                            
                                                            <Button variant="contained" color="default" size="large">
            
                                                                Post-Ad
                                                        <CloudUploadIcon />
                                                            </Button>
                                                           
                                                        </Link>
                                                    </Grid>
                                                    
                                                </Grid>
            
                                            </div><br /><br />
            
            
                                            <h6 align="center">One place for all your needs</h6>
                                        </Paper>
                                    </Grid>
            
                                </Grid>
            
                            </div>
                            <br /><br /></div>
                    )
    }
}

export default PartOne;
