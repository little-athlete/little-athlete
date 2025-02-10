'use client'

import React from 'react'
import Typography, {
	FontWeight,
	TextSize,
	VariantTypography,
} from '@/components/Typography/Typography'
import Input, { InputType } from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'
import Card from '@/components/Card/Card'

const LoginForm = () => {
	return (
		<Card className="w-4/5 p-6 lg:w-1/2">
			<Typography
				variant={VariantTypography.H6}
				size={TextSize.MediumXLarge}
				fontWeight={FontWeight.Bold}
			>
				Login
			</Typography>
			<div>
				<Input type={InputType.Text} label={'Email'} placeholder={''} />
			</div>
			<div className="mt-2">
				<Input type={InputType.Password} label={'Password'} placeholder={''} />
			</div>
			<div className="mt-8">
				<Button
					label={'Login'}
					full
					variant={ButtonVariant.Secondary}
					textSize={TextSize.Medium}
					textClassName="!font-medium"
				/>
			</div>
		</Card>
	)
}
export default LoginForm
