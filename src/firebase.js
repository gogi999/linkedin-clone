import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDCneyVgGKf3r_fJJ1MmJfLsloWF8EpXCc',
  authDomain: 'linkedin-clone-32381.firebaseapp.com',
  projectId: 'linkedin-clone-32381',
  storageBucket: 'linkedin-clone-32381.appspot.com',
  messagingSenderId: '620428147355',
  appId: '1:620428147355:web:b1bd0c007093f2be5aa43e',
  measurementId: 'G-X16L45CFVF',
}

// eslint-disable-next-line no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
