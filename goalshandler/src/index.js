import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {firebaseApp} from './firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';
import {logUser} from './actions/index';
const browserHistory = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user =>{
    if (user) {
        browserHistory.push('/app');
        const {email} = user;
        store.dispatch(logUser(email));
    } else {
        browserHistory.replace('/signin');
    }
})
const browserHistory = createBrowserHistory();
const store = createStore(reducer);



const app = (
    <Provider store={store}>
      <Router path="/" history={browserHistory}>
       <Switch>
        <Route path="/app" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
       </Switch>
      </Router>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

