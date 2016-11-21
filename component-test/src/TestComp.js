import React, { Component } from 'react';
import * as firebase from 'firebase';

class TestComp extends Component {

  constructor() {
    super();
    this.state = {
      name : "Test Name"
    };
  }



  componentDidMount(){

    const rootRef = firebase.database().ref().child('react');
    const messageRef = rootRef.child('welcomeMsg');

    messageRef.on('value', snap => {
      this.setState({
        name : snap.val()
      });
    });


  }

  render() {

    return (
      <div>
          <h1>{this.props.label}  {this.state.name} </h1>
      </div>
    );
  }
}

export default TestComp;
