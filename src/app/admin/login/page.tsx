import { redirect } from 'next/navigation'
import Typography from '@/components/Typography/Typography'
import LoginForm from '@/components/Admin/LoginForm'
import { validateUser } from '@/utils/authValidation'

export default async function LoginPage() {
	const { isVerifyUser } = await validateUser()
	if (isVerifyUser) {
		return redirect('/admin/home')
	}

	return (
		<main className="flex min-h-screen w-full items-center justify-center bg-secondary">
			<div className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-14 p-6">
				<LoginForm />
				<Typography className="!text-white">
					Copyright © 2024 little Athelete. All rights reserved.
				</Typography>
			</div>
		</main>
	)
}
