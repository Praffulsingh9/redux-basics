import React, { Component } from 'react';
import {completeGoalRef} from '../firebase';
import {connect} from 'react-redux';
import {setCompleted} from '../actions'


class CompletedGoalList extends Component {

    componentDidMount() {
        completeGoalRef.on('value', snap => {
          let completeGoals = [];
          snap.forEach(completeGoal => {
            const { email, title } = completeGoal.val();
            
            completeGoals.push({ email, title});
          })
          this.props.setCompleted(completeGoals);
        })
      }

      clearCompleted(){
          completeGoalRef.set([]);
      }

    render() {
        return (
            <div>
                {
                    this.props.completeGoals.map((completeGoal,index)=>{
                        const {email,title}=completeGoal;
                        <div key={index}>
                         <strong>{title}</strong>completed by <em><span>{email}</span></em>
                        </div>
                    })
                }
                <button className="btn btn-primary" onClick={()=>this.clearCompleted()}></button>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {completeGoals} = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps,{setCompleted})(CompletedGoalList);