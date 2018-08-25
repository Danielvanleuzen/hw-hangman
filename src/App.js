import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import LinkListContainer from './components/LinkListContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
        </header>
       
          <LinkListContainer />
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{ state
   

  }
}

export default connect(mapStateToProps)(App);
