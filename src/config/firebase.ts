// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyBvxJmmfSejPO6uDiE-T-j2PF7iGIEpmZA',
	authDomain: 'little-athlete-667e4.firebaseapp.com',
	projectId: 'little-athlete-667e4',
	storageBucket: 'little-athlete-667e4.firebasestorage.app',
	messagingSenderId: '649749640078',
	appId: '1:649749640078:web:11082d78a060a70e67eadf',
	measurementId: 'G-P32QNRJ6TD',
}

if (!getApps().length) {
	console.log('Initializing firebase initialization...')
	initializeApp(firebaseConfig)
}

export const auth = getAuth()
export const firestore = getFirestore()
