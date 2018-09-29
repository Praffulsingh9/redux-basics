import React, { Component } from 'react';
import {firebaseApp} from '../firebase'; 
import {Link} from 'react-router-dom'
class SignIn extends Component {

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
 
    signIn(){
        const { email,password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .catch(error => {
            this.setState({error});
        });
        console.log(this.state);
    }


    render() {
        return (
            <div className="form-inline">
                <h2>Sign In</h2>
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
                onClick={()=>this.signIn()}>Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signup'}>Sign Up Instead</Link></div>
            </div>
        );
    }
}

export default SignIn;