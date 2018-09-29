import React, { Component } from 'react';
import {goalRef} from '../firebase';
import {connect} from 'react-redux';
class AddGoal extends Component {
constructor(props){
    super(props);
    this.state ={
        title:''
    }

}

    addGoal(){
          console.log(this.state);
          goalRef.push({email:this.props.email,title:this.state.title});
    }

    render() {
        return (
            <div className="form-inline">
              <div className="form-group">
                <input 
                type='text' 
                className='form-control' 
                placeholder='Add A Goal' 
                style={{marginRight :'5px'}}
                onChange={(event)=>this.setState({title:event.target.value})}/>
                <button onClick={()=>this.addGoal()} className="btn btn-success" type="button">
                    Add a Goal
                </button>
              </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {email} = state;
    return{
        email
    }
}

export default connect(mapStateToProps,null)(AddGoal);