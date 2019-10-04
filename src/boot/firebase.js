import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from 'src/config/firebase'
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export const db = firestore
