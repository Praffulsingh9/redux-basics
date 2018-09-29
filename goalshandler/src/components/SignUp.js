import React, { Component } from 'react';
import {firebaseApp} from '../firebase'; 
class SignUp extends Component {

   constructor(props){
       super(props);
       this.state = {
           email:'',
           password:'',
           error :{
               message:''
           }
       }
       
   }

   signUp(){
       const { email,password} = this.state;
       firebaseApp.auth().createUserWithEmailAndPassword(email,password)
       .catch(error => {
           this.setState({error});
       });
       console.log(this.state);
   }

    render() {
        return (
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group">
                <input 
                type="email" 
                className="form-control" 
                placeholder="Enter Email..."
                style={{marginRight:"5px"}}
                onChange={(event)=>this.setState({email:event.target.value})}/>
                <input 
                type="password" 
                className="form-control" 
                placeholder="Enter Password..."
                style={{marginRight:"5px"}}
                onChange={(event)=>this.setState({password:event.target.value})}/>
                <button 
                className="btn btn-primary" 
                type="button"
                onClick={()=>this.signUp()}>Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        );
    }
}

export default SignUp;