import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { firestore } from '@/config/firebase'

export async function insertDoc(collName: string, data: object) {
	const docRef = await addDoc(collection(firestore, collName), data)

	return { ...data, id: docRef.id }
}

export async function updateDoc(collName: string, id: string, data: object) {
	const docRef = doc(firestore, collName, id)
	await setDoc(docRef, { ...data }, { merge: true })
}

export async function getOneDocById(collName: string, id: string) {
	const docRef = doc(firestore, collName, id)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		return { ...docSnap.data(), id }
	}

	return null
}
