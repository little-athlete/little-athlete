import 'server-only'
import { adminDb } from '@/lib/firebase-admin'
import { unstable_cache } from 'next/cache'

const SINGLETONS = 'singletons'

export function getSingleton<T>(id: string): Promise<T | null> {
	return unstable_cache(
		async () => {
			const snap = await adminDb.collection(SINGLETONS).doc(id).get()
			if (!snap.exists) return null
			return { ...snap.data(), id } as T
		},
		[`singleton-${id}`],
		{ revalidate: 60, tags: [`singleton-${id}`] }
	)()
}

export async function saveSingleton(id: string, data: object): Promise<void> {
	await adminDb.collection(SINGLETONS).doc(id).set(data, { merge: true })
	const { revalidateTag } = await import('next/cache')
	revalidateTag(`singleton-${id}`)
}
