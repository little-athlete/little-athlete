'use server'

import { revalidatePath } from 'next/cache'
import { saveSingleton } from '@/lib/server-db'
import { validateUser } from '@/utils/authValidation'
import { SINGLETON_IDS } from '@/lib/content'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

export async function saveLandingPage(data: ILandingPage): Promise<void> {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) throw new Error('Unauthorized')

	await saveSingleton(SINGLETON_IDS.landing, data)
	revalidatePath('/')
}
