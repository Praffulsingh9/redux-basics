import React, { Component } from 'react';
import '../App.css';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
class App extends Component {

  signOut(){
      firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div className="App" style={{marginRight:'5px'}}>
        <h3>Goals Handler</h3>
        <AddGoal/>
        <hr/>
        <h4>Goals</h4>
        <GoalList />
        <hr />
        <button
        style={{marginTop:'5px'}}
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
