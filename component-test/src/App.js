import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ASD from './TestComp';
import Post from './component/PostComponent';
import ViewPosts from './component/ViewPosts';
import GMap from './component/GMap';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAUeUQ4wC9ABYaysygbLwO6_bjiaii4uqk",
  authDomain: "react-firebase-test-b9186.firebaseapp.com",
  databaseURL: "https://react-firebase-test-b9186.firebaseio.com",
  storageBucket: "react-firebase-test-b9186.appspot.com",
  messagingSenderId: "431767235868"
};
firebase.initializeApp(config);

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ASD label="Welcome "/>
        <Post/>
        <ViewPosts/>

      </div>
    );
  }
}

export default App;
