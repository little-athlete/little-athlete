import 'server-only'
import { getSingleton } from '@/lib/server-db'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import type { ISiteSettings } from '@/db/firestore/interfaces/site_settings'

export const SINGLETON_IDS = {
	landing: 'page_landing',
	settings: 'site_settings',
} as const

export function getLandingPage() {
	return getSingleton<ILandingPage>(SINGLETON_IDS.landing)
}

export function getSiteSettings() {
	return getSingleton<ISiteSettings>(SINGLETON_IDS.settings)
}
