import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTeT8KVcoVImeBw_1qdx8dpAwQZoZTG9c',
  authDomain: 'designook-22958.firebaseapp.com',
  projectId: 'designook-22958',
  storageBucket: 'designook-22958.appspot.com',
  messagingSenderId: '466718167779',
  appId: '1:466718167779:web:d7d51e733a9cf1fc716bd6',
  measurementId: 'G-EV3BD4X7K9',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firestoreInstance = getFirestore(firebaseApp);
export const storageInstance = getStorage(firebaseApp);

let analytics;
isSupported()
  .then((isSupported) => {
    if (isSupported) {
      analytics = getAnalytics(firebaseApp);
    } else {
      return;
    }
  })
  .catch((e) => {
    e;
    return;
  });

export default analytics;
