import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Hello from './components/simple.js'
import Intro from './components/intro.js'


function App() {
  return (

    <Router>
    <Switch>
    
    <Route exact path="/" component={() => (<Intro/>)} />
    <Route exact path="/simple" component={() => (<Hello/>)} />

    </Switch>
    </Router>
  );
}

export default App;
