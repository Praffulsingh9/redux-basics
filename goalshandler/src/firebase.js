import * as firebase from 'firebase';

const config = {
    apiKey: "{your api key}",
    authDomain: "{your auth domain}",
    databaseURL: "{your database url}",
    projectId: "projectId",
    storageBucket: "{your storage bucket}",
    messagingSenderId: "{your id}"
  };

 export const firebaseApp = firebase.initializeApp(config);
