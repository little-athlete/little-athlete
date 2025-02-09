import React from 'react'
import {
	DefaultLocation,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Typography, { TextSize } from '@/components/Typography/Typography'
import Input from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import { ILocation } from '@/db/firestore/interfaces/landing'

const LocationForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeLocation = (field: keyof ILocation, value: string, index: number) => {
		const newValue = { ...contentData?.locations[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'locations', newValue, index)
	}

	const onAddLocation = () => {
		onChangeArrayItem(contentData, setContentData, 'locations', DefaultLocation)
	}

	const onDeleteLocation = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'locations', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			{/*Locations Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Location List
			</Typography>
			{contentData?.locations?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`locations_${i}`}
				>
					<Input
						label={'Location Title'}
						value={item.title}
						onChange={(e) => onChangeLocation('title', e.target.value, i)}
					/>
					<Input
						label={'Address'}
						value={item.address}
						onChange={(e) => onChangeLocation('address', e.target.value, i)}
					/>
					<Input
						label={'Link Text'}
						value={item.link_title}
						onChange={(e) => onChangeLocation('link_title', e.target.value, i)}
					/>
					<Input
						label={'Link'}
						value={item.link}
						onChange={(e) => onChangeLocation('link', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteLocation(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Locations'}
				textSize={TextSize.XSmall}
				onClick={() => onAddLocation()}
			/>
			{/*Locations Data End*/}
		</Box>
	)
}

export default LocationForm
