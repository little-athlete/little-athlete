import 'server-only'
import { adminDb } from '@/lib/firebase-admin'

const SINGLETONS = 'singletons'

export async function getSingleton<T>(id: string): Promise<T | null> {
	const snap = await adminDb.collection(SINGLETONS).doc(id).get()
	if (!snap.exists) return null
	return { ...snap.data(), id } as T
}

export async function saveSingleton(id: string, data: object): Promise<void> {
	await adminDb.collection(SINGLETONS).doc(id).set(data, { merge: true })
}
