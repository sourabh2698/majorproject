import React from 'react';
import './App.css';
import SearchAppBar from './Navbar/Navigation.js'
import Login from './form/login.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './footer/footer'
import HomePage from './mainpage/use'
import Test from './form/tab';
import NavBar2 from './Navbar/navbar2'
import AllAds from './Ads/allads'
import MyProfile from './profile/myprofile'
import AdCard from './mainpage/partTwo';
import PostAd from './form/postad';
import axios from 'axios'
import * as firebase from 'firebase/app'
import "firebase/auth";
import ContactUs from './footer/contactus';
import PartOne from './mainpage/part1';


var firebaseConfig = {
  apiKey: "AIzaSyBaSQtDXYGhH61GikRhJeKSsSvbi5Bg_0g",
  authDomain: "collegeadda-62216.firebaseapp.com",
  databaseURL: "https://collegeadda-62216.firebaseio.com",
  projectId: "collegeadda-62216",
  storageBucket: "",
  messagingSenderId: "778633185229",
  appId: "1:778633185229:web:b725a241cd3650fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    // this.loginCheck()

    this.state.db = {
      ad: [
        //   {
        //   title: "title1",
        //   descrpiton: "descrpiton 1",
        // },
        // {
        //   title:"title2",
        //   des:"descrpiton 2",
        // },
        // {
        //   title:"title3",
        //   des:"descrpiton 3",
        // },
      ],
      ads:[
        {
          ProductName:"Book1",
          ProductDescription:"Description 1",
          productcondition:"Good",
          OldPrice:"200.00",
          NewPrice:"150.00",
        },
        {
          ProductName:"Book1",
          ProductDescription:"Description 1",
          productcondition:"Good",
          OldPrice:"200.00",
          NewPrice:"150.00",
        },
        {
          ProductName:"Book1",
          ProductDescription:"Description 1",
          productcondition:"Good",
          OldPrice:"200.00",
          NewPrice:"150.00",
        },

      ]
    }

  }

  componentDidMount = () => {
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






  render() {

    return (<div>


      <Router>
        <div className="background">
          {/* <SearchAppBar /><br /> */}
          <NavBar2/><br/>
          <Route path="/" exact component={PartOne} />
          <Route path="/" exact render={() => <AdCard db={this.state.db} />} />
          <Route path="/" exact component={HomePage} />
          <Route path="/myprofile/" component={MyProfile} />

          <Route path="/login/" exact component={Login} />
          {/* <Route path="/signup/" component={Test} /> */}
          {/* <Route path="/allad/" component={AllAds}></Route> */}
          <Route path="/allad/" render={() => <AllAds db={this.props.db} />}></Route>
          <Route path="/postad/" component={PostAd}></Route>
          <Route path="/contactus/" component={ContactUs} />
          <Footer />

        </div>
      </Router>
    </div>
    )
  }
}


export default App;