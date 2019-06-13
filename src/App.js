import React from 'react';
import './App.css';
import SearchAppBar from './Navbar/Navigation.js'
import  Login from './form/login.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from './footer/footer'
import HomePage from './mainpage/homepage'
import Test from './form/tab';
import NavBar from './Navbar/navbar2'
import AllAds from './Ads/allads'
import MyProfile from './profile/myprofile'
import AdCard from './mainpage/partTwo';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.db={
      ad:[{
        title:"title1",
        des:"descrpiton 1",
      },
      {
        title:"title2",
        des:"descrpiton 2",
      },
      {
        title:"title3",
        des:"descrpiton 3",
      },
      ]
    }

  }

  render() {
    return (
     <Router>
     <div className="background">
        <SearchAppBar /><br />
        
        <Route path="/" exact component={HomePage}/>
        <Route path="/myprofile/"  component={MyProfile} />
        <Route path="/" exact render={()=> <AdCard db={this.db} />} />
        {/* <NavBar/> */}
         
        <Route path="/login/" exact component={Login} />
        <Route path="/signup/" component={Test} />}
        <Route path="/allad/" component={AllAds}></Route>
      
      <Footer/>
       
      </div>
      </Router>
    )
  }
}


export default App;