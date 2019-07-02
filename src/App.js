import React from 'react';
import './App.css';
// import SearchAppBar from './Navbar/Navigation.js'

import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

import Footer from './footer/footer'
import HomePage from './mainpage/use'
import NavBar2 from './Navbar/navbar2'
import MyProfile from './profile/myprofile'
import AdCard from './mainpage/partTwo';
import PostAd from './form/postad';
import axios from 'axios'
import * as firebase from 'firebase/app'
import "firebase/auth";
import ContactUs from './footer/contactus';
import PartOne from './mainpage/part1';
import ComplexGrid from './Ads/ads';
import Product from './Ads/product';
import FullWidthTabs from './form/signuptab';


var firebaseConfig = {
  apiKey: "AIzaSyBaSQtDXYGhH61GikRhJeKSsSvbi5Bg_0g",
  authDomain: "collegeadda-62216.firebaseapp.com",
  databaseURL: "https://collegeadda-62216.firebaseio.com",
  projectId: "collegeadda-62216",
  storageBucket: "collegeadda-62216.appspot.com",
  messagingSenderId: "778633185229",
  appId: "1:778633185229:web:b725a241cd3650fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.db = {
      ad: [],
      buy: [],
      users: []

    }

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
        this.getBlogs();

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

  componentDidMount() {
    this.checkLogin();
  }
  componentDidUpdate(){
    this.getData();

  }
  getData() {
    axios.get('http://localhost:8080/postads')
      .then((res) => {
        console.log(res)

        let db = this.state.db;
        db.ad = res.data;
        console.log(res.data)
        this.setState({
          db: db
        })
      })
  }

  addProduct(item) {
    let db = this.state.db;
    db.buy.pop(item);
    db.buy.push(item)
    this.setState({
      db: db
    })
  }




  render() {

    return (<div>



      <div className="background">
        {/* <SearchAppBar /><br /> */}
        <NavBar2 /><br />
        <Route path="/" exact component={PartOne} />
        <Route path="/" exact render={() => <AdCard db={this.state.db} addProduct={this.addProduct.bind(this)} />} />
        <Route path="/" exact component={HomePage} />
        <Route path="/myprofile/" component={MyProfile} />

        {/* <Route path="/login/" exact component={FullWidthTabs} /> */}
        {/* <Route path="/signup/" component={Test} /> */}
        {/* <Route path="/allad/" component={AllAds}></Route> */}
        {/* <Route path="/allad/" render={() => <AllAds db={this.state.db} />}></Route> */}
        <Route path="/allad/" render={() => <ComplexGrid db={this.state.db} />}></Route>
      {this.state.db.ad.length ?<Route path="/product/:id" render={(props) => <Product {...props} db={this.state.db} />}></Route>
:null}   
        <Route path="/postad/" component={PostAd}></Route>
        <Route path="/contactus/" component={ContactUs} />

        <Footer />

      </div>

    </div>
    )
  }
}


export default App;