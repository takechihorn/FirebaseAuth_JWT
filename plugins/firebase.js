import * as firebase from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCW9oLUxKcyLdxcKElmdpPEvjBPrLc8ubU",
  authDomain: "takechi-firebase-login.firebaseapp.com",
  databaseURL: "https://takechi-firebase-login.firebaseio.com",
  projectId: "takechi-firebase-login",
  storageBucket: "takechi-firebase-login.appspot.com",
  messagingSenderId: "12006975675",
  appId: "1:12006975675:web:aa07e3bdba9c4bb64ae19e",
  measurementId: "G-4871VN9R6Q"
};
// Initialize Firebase

let app = null;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase
