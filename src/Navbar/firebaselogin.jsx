import React, { Component } from 'react'
import {Button} from '@material-ui/core'
import ControlledTabs from '../form/formtab'
import * as firebase from 'firebase/app';
import "firebase/auth";

export class GoogleLogin extends Component {
    constructor(props){
        super(props)
        this.state = {};
        this.loginCheck()

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
        return (<div>
            {this.state.user ?
                <div>
                  {/* <p>{this.state.user.displayName}</p>
                  <p>{this.state.user.email}</p> */}
                  {/* <img src={this.state.user.photoURL} style={{height:"10%",width:"10%"}}></img> */}
                  <Button onClick={() => { this.logOut() }}>Logout</Button>
                </div> : 
              
              <Button><ControlledTabs></ControlledTabs></Button>}
                </div>
                
        )
    }
}

export default GoogleLogin
