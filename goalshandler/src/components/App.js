import React, { Component } from 'react';
import '../App.css';
import {firebaseApp} from '../firebase';

class App extends Component {

  signOut(){
      firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        App
        <button
        className="btb btn-danger"
        onClick={()=>this.signOut()}>Sign Out</button>
      </div>
    );
  }
}

export default App;
