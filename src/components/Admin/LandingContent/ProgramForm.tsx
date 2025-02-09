import React from 'react'
import {
	DefaultPrograms,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import { IProgramsData } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import Box, { BoxDirection } from '@/components/Box'
import Typography, { TextSize } from '@/components/Typography/Typography'
import Input from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'

const ProgramForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeProgram = (field: keyof IProgramsData, value: string, index: number) => {
		const newValue = { ...contentData?.programs_data[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'programs_data', newValue, index)
	}

	const onAddProgram = () => {
		onChangeArrayItem(contentData, setContentData, 'programs_data', DefaultPrograms)
	}

	const onDeleteProgram = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'programs_data', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Program Title'}
				value={contentData?.programs_title}
				onChange={(e) => setContentData('programs_title', e.target.value)}
			/>
			{/*Programs Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Program List
			</Typography>
			{contentData?.programs_data?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`program_data_${i}`}
				>
					<Input
						label={'Title'}
						value={item.name}
						onChange={(e) => onChangeProgram('name', e.target.value, i)}
					/>
					<Input
						label={'Image'}
						value={item.image_url}
						onChange={(e) => onChangeProgram('image_url', e.target.value, i)}
					/>
					<Input
						label={'Alt Text'}
						value={item.alt_text}
						onChange={(e) => onChangeProgram('alt_text', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteProgram(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Programs'}
				textSize={TextSize.XSmall}
				onClick={() => onAddProgram()}
			/>
			{/*Programs Data End*/}
		</Box>
	)
}

export default ProgramForm
