'use client'

import Button, { ButtonVariant } from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Input, { InputType } from '@/components/InputField/InputField'
import Typography, {
	FontWeight,
	TextSize,
	VariantTypography,
} from '@/components/Typography/Typography'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useState } from 'react'

export default function LoginPage() {
	// const { handleSubmit, onSubmit, register, loading, errorValidate, errorSubmit } =
	// 	useLoginService()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async () => {
		const result = await signInWithEmailAndPassword(auth, email, password)
		console.log(result)
	}

	return (
		<main className="flex min-h-screen w-full items-center justify-center bg-secondary">
			<div className="flex w-full max-w-screen-xl flex-col items-center justify-center gap-14 p-6">
				<Card className="w-4/5 p-6 lg:w-1/2">
					<Typography
						variant={VariantTypography.H6}
						size={TextSize.MediumXLarge}
						fontWeight={FontWeight.Bold}
					>
						Login
					</Typography>
					<div>
						<Input
							type={InputType.Text}
							label={'Email'}
							placeholder={''}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mt-2">
						<Input
							type={InputType.Password}
							label={'Password'}
							placeholder={''}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mt-8">
						<Button
							label={'Login'}
							full
							variant={ButtonVariant.Secondary}
							textSize={TextSize.Medium}
							textClassName="!font-medium"
							onClick={handleLogin}
						/>
					</div>
				</Card>
				<Typography className="!text-white">
					Copyright © 2024 little Athelete. All rights reserved.
				</Typography>
			</div>
		</main>
	)
}
