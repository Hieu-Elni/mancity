import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import 'firebase/storage'
 
// thieu import error firebase.storage not is function
const config = {
    apiKey: "",
    authDomain: "m-city-5bca1.firebaseapp.com",
    databaseURL: "https://m-city-5bca1.firebaseio.com",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  firebase.initializeApp(config);
 
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
    // firebaseDB.ref('matches').once('value').then((snapshot)=>{
    // console.log(snapshot.val());
    // });
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');
export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}
