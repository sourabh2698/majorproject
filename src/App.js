import React from 'react';
import './App.css';
import SearchAppBar from './Navbar/Navigation.js'
import MainPage from './mainpage/mainpage.jsx'
import ImgMediaCard from './mainpage/partTwo.jsx';
import  Login from './form/login.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
     <Router>
     <div>
        <SearchAppBar /><br /><br /><br /><br />
        <MainPage />
        <ImgMediaCard />
        <Login/>
        <Route path="/login/" exact component={Login} />

      </div>
      </Router>
    )
  }
}


export default App;
