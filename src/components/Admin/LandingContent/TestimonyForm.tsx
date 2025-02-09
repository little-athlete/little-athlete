import React from 'react'
import {
	DefaultTestimony,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import { ITestimonyData } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import Box, { BoxDirection } from '@/components/Box'
import Typography, { TextSize } from '@/components/Typography/Typography'
import Input, { InputType } from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'

const TestimonyForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeTestimony = (field: keyof ITestimonyData, value: string, index: number) => {
		const newValue = { ...contentData?.testimony_data[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'testimony_data', newValue, index)
	}

	const onAddTestimony = () => {
		onChangeArrayItem(contentData, setContentData, 'testimony_data', DefaultTestimony)
	}

	const onDeleteTestimony = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'testimony_data', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Testimony Title'}
				value={contentData?.testimony_title}
				onChange={(e) => setContentData('testimony_title', e.target.value)}
			/>

			{/*Testimony Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Testimony List
			</Typography>
			{contentData?.testimony_data?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`testimony_${i}`}
				>
					<Input
						label={'Testimony Name'}
						value={item.name}
						onChange={(e) => onChangeTestimony('name', e.target.value, i)}
					/>
					<Input
						label={'Address'}
						value={item.text}
						onChange={(e) => onChangeTestimony('text', e.target.value, i)}
					/>
					<Input
						label={'Link Text'}
						type={InputType.Number}
						value={String(item.star)}
						onChange={(e) => onChangeTestimony('star', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteTestimony(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Testimony'}
				textSize={TextSize.XSmall}
				onClick={() => onAddTestimony()}
			/>
			{/*Testimony Data End*/}
		</Box>
	)
}
export default TestimonyForm
