// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
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

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }

export default app
