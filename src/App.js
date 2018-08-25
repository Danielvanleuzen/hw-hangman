import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import LinkList from './components/LinkListContainer'
import { Route } from 'react-router-dom'
import HangmanContainer from './components/HangmanContainer'


class App extends Component {
  render() {
    return (
 
        <div className="App">
        <Route exact path="/" component={LinkList} />
        <Route exact path="/Hangman" component={HangmanContainer} />
      </div>
  
    );
  }
}

// const mapStateToProps = (state) => {
//   return{ state
   

//   }
// }

export default App;
//connect(mapStateToProps)(App);
