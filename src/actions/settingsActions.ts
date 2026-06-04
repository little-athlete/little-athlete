'use server'

import { revalidatePath } from 'next/cache'
import { saveSingleton } from '@/lib/server-db'
import { validateUser } from '@/utils/authValidation'
import { SINGLETON_IDS } from '@/lib/content'
import type { ISiteSettings } from '@/db/firestore/interfaces/site_settings'

export async function saveSiteSettings(data: ISiteSettings): Promise<void> {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) throw new Error('Unauthorized')

	await saveSingleton(SINGLETON_IDS.settings, data)
	revalidatePath('/', 'layout')
}
