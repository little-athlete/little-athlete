import { cookies } from 'next/headers'
import { FirebaseAuthError, getAuth } from 'firebase-admin/auth'
import { unstable_cache } from 'next/cache'

const cachedVerifyToken = unstable_cache(
	async (token: string) => {
		await getAuth().verifyIdToken(token)
		return true
	},
	['verify-firebase-token'],
	{ revalidate: 300 } // cache valid 5 menit, sesuai TTL token session
)

export const validateUser = async (): Promise<{ isVerifyUser: boolean }> => {
	const result = { isVerifyUser: false, message: '' }
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value
	if (!token) {
		result.message = 'invalid token'
		return result
	}

	try {
		await cachedVerifyToken(token)
		result.isVerifyUser = true
		return result
	} catch (e) {
		if (e instanceof (FirebaseAuthError || Error)) {
			result.message = e.message
		}
		result.isVerifyUser = false
		console.error(e)
		return result
	}
}
