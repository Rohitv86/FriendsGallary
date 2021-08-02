//import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


//Your web app's firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcR_iIwt5GdeL8VMk9U2DocQdRouRM1Ic",
  authDomain: "image-firegram-f013b.firebaseapp.com",
  projectId: "image-firegram-f013b",
  storageBucket: "image-firegram-f013b.appspot.com",
  messagingSenderId: "1023998670158",
  appId: "1:1023998670158:web:2872bd8bf3d1c74a055a1f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage,projectFirestore,timestamp };
