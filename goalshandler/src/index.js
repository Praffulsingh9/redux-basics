import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {firebaseApp} from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

firebaseApp.auth().onAuthStateChanged(user =>{
    if (user) {
      console.log('user is signed in or up',user);
    } else {
      console.log('user still needs to sign in',user);
    }
})

const browserHistory = createBrowserHistory();

const app = (
    <Router path="/" history={browserHistory}>
    <Switch>
    <Route path="/app" component={App}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
    </Switch>
    </Router>
)

ReactDOM.render(app, document.getElementById('root'));

