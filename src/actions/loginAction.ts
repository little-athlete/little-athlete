'use server'

import { cookies } from 'next/headers'

export const loginAction = async (token: string) => {
	const cookieStore = await cookies()
	cookieStore.set('token', token)
}
