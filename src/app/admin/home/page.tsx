'use client'
import Box, { BoxVariant } from '@/components/Box'
import Card from '@/components/Card/Card'
import Input, { InputType } from '@/components/InputField/InputField'
import Typography, { FontWeight } from '@/components/Typography/Typography'
import React from 'react'

const AdminHomePage = () => {
	return (
		<Box className="mt-6 w-1/2 px-6 xl:px-12">
			<Typography>Welcome!!</Typography>
			<Card className="bg-slate-200">
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Typography fontWeight={FontWeight.SemiBold}>asjndjas</Typography>
				</Box>
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Input type={InputType.Text} label={'Home'} placeholder={''} required />
				</Box>
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Input type={InputType.Email} label={'jansd'} placeholder={''} />
				</Box>
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Input type={InputType.Email} label={'jansd'} placeholder={''} />
				</Box>
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Input type={InputType.Email} label={'jansd'} placeholder={''} />
				</Box>
				<Box spaceVertical variant={BoxVariant.Medium}>
					<Input type={InputType.Email} label={'jansd'} placeholder={''} />
				</Box>
			</Card>
		</Box>
	)
}

export default AdminHomePage
