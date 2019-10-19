import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth'
import 'firebase/storage'
 
// thieu import error firebase.storage not is function
const config = {
    apiKey: "AIzaSyBTYIBNGDuKZCNA4_brZ5IsnUQGuLn1-a4",
    authDomain: "m-city-5bca1.firebaseapp.com",
    databaseURL: "https://m-city-5bca1.firebaseio.com",
    projectId: "m-city-5bca1",
    storageBucket: "m-city-5bca1.appspot.com",
    messagingSenderId: "206184367940",
    appId: "1:206184367940:web:2083ae29af1c41a94eb911",
    measurementId: "G-PEMWYSK3ZZ"
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