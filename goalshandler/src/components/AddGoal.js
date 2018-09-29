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
          goalRef.push({email:this.props.user,title:this.state.title});
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
    const {user} = state;
    return{
        user
    }
}

export default connect(mapStateToProps,null)(AddGoal);