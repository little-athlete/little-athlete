import { getOneDocById } from '@/db/firestore/index'
import { ILandingPage } from '@/db/firestore/interfaces/landing'

const PathFirestoreLandingPage = 'landing-page'
const PathIdDocFirestoreLandingPage = 'content_data'

export async function getContentData() {
	const doc = await getOneDocById(PathFirestoreLandingPage, PathIdDocFirestoreLandingPage)
	return doc as ILandingPage
}
