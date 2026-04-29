// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAe_V33K45usCyoSwIcvkVij5jZ5brXQvA',
  authDomain: 'llamador-turnos.firebaseapp.com',
  projectId: 'llamador-turnos',
  storageBucket: 'llamador-turnos.firebasestorage.app',
  messagingSenderId: '147294474639',
  appId: '1:147294474639:web:098460de573d2740f93bfa',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
