'use client'

import React, { useState } from 'react'
import Typography, {
	FontWeight,
	TextSize,
	VariantTypography,
} from '@/components/Typography/Typography'
import Input, { InputType } from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { loginAction } from '@/actions/loginAction'
import { auth } from '@/config/firebase'

const LoginForm = () => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const [loading, setLoading] = useState(false)

	const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
		setLoading(true)
		e.preventDefault()
		try {
			const result = await signInWithEmailAndPassword(auth, email, pass)
			await loginAction(await result.user.getIdToken())
			setLoading(false)
		} catch {
			setErrMsg('invalid credentials')
			setLoading(false)
		}
	}
	return (
		<Card className="w-4/5 p-6 lg:w-1/2">
			<form className="flex flex-col gap-6" onSubmit={handleLogin}>
				<Typography
					variant={VariantTypography.H6}
					size={TextSize.MediumXLarge}
					fontWeight={FontWeight.Bold}
				>
					Login
				</Typography>
				<Input
					type={InputType.Email}
					name={'email'}
					label={'Email'}
					placeholder={''}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type={InputType.Password}
					name={'password'}
					label={'Password'}
					placeholder={''}
					value={pass}
					onChange={(e) => setPass(e.target.value)}
					required
				/>

				<Typography size={TextSize.XSmall} className={'italic text-red-500'}>
					{errMsg}
				</Typography>

				<Button
					label={'Login'}
					full
					variant={ButtonVariant.Secondary}
					textSize={TextSize.Medium}
					textClassName="!font-medium"
					type="submit"
					isLoading={loading}
				/>
			</form>
		</Card>
	)
}
export default LoginForm
