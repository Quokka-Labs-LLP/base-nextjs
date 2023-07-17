import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCj2NkarLCe8JDSSjCiLtJT8_4P6M0p4zI',
  authDomain: 'base-nextjs.firebaseapp.com',
  projectId: 'base-nextjs',
  storageBucket: 'base-nextjs.appspot.com',
  messagingSenderId: '909959932435',
  appId: '1:909959932435:web:9d10039cc096987b8dade6',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const FirebaseDatabase = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, provider, db, FirebaseDatabase, storage }
