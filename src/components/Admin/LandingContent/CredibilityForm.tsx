import React from 'react'
import {
	DefaultCredibility,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'
import Typography, { TextSize } from '@/components/Typography/Typography'
import { ICredibilityData } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import Button, { ButtonVariant } from '@/components/Button/Button'

const CredibilityForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeCredibility = (field: keyof ICredibilityData, value: string, index: number) => {
		const newValue = { ...contentData?.credibility_data[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'credibility_data', newValue, index)
	}

	const onAddCredibility = () => {
		onChangeArrayItem(contentData, setContentData, 'credibility_data', DefaultCredibility)
	}

	const onDeleteCredibility = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'credibility_data', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Title'}
				value={contentData?.credibility_title}
				onChange={(e) => setContentData('credibility_title', e.target.value)}
			/>
			<Input
				label={'Description'}
				value={contentData?.credibility_desc}
				onChange={(e) => setContentData('credibility_desc', e.target.value)}
			/>

			{/*Credibility Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Credibility List
			</Typography>
			{contentData?.credibility_data?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`credibility_data_${i}`}
				>
					<Input
						label={'Value'}
						value={item.value}
						onChange={(e) => onChangeCredibility('value', e.target.value, i)}
					/>
					<Input
						label={'Label'}
						value={item.label}
						onChange={(e) => onChangeCredibility('label', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteCredibility(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Credibility'}
				textSize={TextSize.XSmall}
				onClick={onAddCredibility}
			/>
			{/*Credibility Data End*/}
		</Box>
	)
}

export default CredibilityForm
