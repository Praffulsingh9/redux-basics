import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBWhmjkqDTqtq-KC6Oz030OHZtAqXuJpxk",
    authDomain: "goalshandler.firebaseapp.com",
    databaseURL: "https://goalshandler.firebaseio.com",
    projectId: "goalshandler",
    storageBucket: "goalshandler.appspot.com",
    messagingSenderId: "900369985819"
  };

 export const firebaseApp = firebase.initializeApp(config);
 export const goalRef = firebase.database().ref('goals');
 export const completeGoalRef = firebase.database().ref('completeGoals');
