import * as firebase from 'firebase'; 

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAl24btHzCaNHbzbRcjQGD3eV9w8tiGAho",
    authDomain: "nba-app-54355.firebaseapp.com",
    databaseURL: "https://nba-app-54355.firebaseio.com",
    projectId: "nba-app-54355",
    storageBucket: "nba-app-54355.appspot.com",
    messagingSenderId: "180888308322"
  };
  firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => { 
    const data = [];
        snapshot.forEach((childSnapshot) => {
            data.push({ 
            ...childSnapshot.val(),
            id:childSnapshot.key

        })
    });

    return data;
}

export { 
    firebase, 
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}