// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpIweadu-Yt9qGXY3OsLG6i1AEi3vozo0',
  authDomain: 'social-network-9e4b5.firebaseapp.com',
  projectId: 'social-network-9e4b5',
  storageBucket: 'social-network-9e4b5.appspot.com',
  messagingSenderId: '1010165010789',
  appId: '1:1010165010789:web:ca671c02e848b73740518c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
