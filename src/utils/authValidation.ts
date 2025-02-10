import { cookies } from 'next/headers'
import { FirebaseAuthError, getAuth } from 'firebase-admin/auth'

export const validateUser = async (): Promise<{ isVerifyUser: boolean }> => {
	const result = { isVerifyUser: false, message: '' }
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value
	if (!token) {
		result.message = 'invalid token'
		return result
	}

	try {
		await getAuth().verifyIdToken(token)
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
