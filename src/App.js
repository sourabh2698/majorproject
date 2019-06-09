import React from 'react';
import './App.css';
import SearchAppBar from './Navbar/Navigation.js'
import MainPage from './mainpage/mainpage.jsx'
import ImgMediaCard from './mainpage/partTwo.jsx';
import  Login from './form/login.jsx'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Forms from './form/form.js';
import PartOne from './mainpage/part1'
import Footer from './mainpage/footer'

class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
     <Router>
     <div>
        <SearchAppBar /><br />
        <Route path="/login/" exact component={Login} />
        <Route path="/signup/" exact component={Forms} />
        <Route path="/" eaxct component={PartOne}/>
        <Route path ="/" exact component={ImgMediaCard} />
        <Route path = "/" exact component={Footer}/>
       
      </div><br/><br/>
      </Router>
    )
  }
}


export default App;
