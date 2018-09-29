import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import {Form ,FormControl,Button} from 'react-bootstrap'; 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      deadline:"December 25 ,2018",
      newDeadline:''   
    }
  }

  changedDeadline(){
    this.setState({deadline:this.state.newDeadline})
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <div>
          <Clock deadline={this.state.deadline}/>
        </div>
        <Form inline={true}>
        <FormControl className='deadline-input' placeholder='new date' onChange={event => this.setState({newDeadline:event.target.value })}/>
          <Button onClick={()=>this.changedDeadline()}>Submit</Button>
        
        </Form>
          
      </div>
    );
  }
}

export default App;
