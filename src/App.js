import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from './pages/about';
import Home from './pages/home';

class App extends Component {

  render() {    
    return (       
      <Router>           
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
