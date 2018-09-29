import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {firebaseApp} from './firebase';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user =>{
    if (user) {
      browserHistory.push('/app');
    } else {
      browserHistory.replace('/signin');
    }
})



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

