import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBrhNCzU1RjsSv9LPxRF4uHtYj6Wwii2x8',
  authDomain: 'mymoney-54dd0.firebaseapp.com',
  projectId: 'mymoney-54dd0',
  storageBucket: 'mymoney-54dd0.appspot.com',
  messagingSenderId: '915316285620',
  appId: '1:915316285620:web:b81ef3e7d7ec79ba6a37e1'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
