import React, { Component } from 'react';
import '../App.css';
import AddGoal from './AddGoal';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
class App extends Component {

  signOut(){
      firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <h3>Goals</h3>
        <AddGoal/>
        <div>Goals List</div>
        <button
        className="btb btn-danger"
        onClick={()=>this.signOut()}>Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps(state){
    console.log(state);
    return {}
}

export default connect(mapStateToProps,null)(App);
