import React from 'react'
import {
	DefaultAgesBadge,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'
import Typography, { TextSize } from '@/components/Typography/Typography'
import { IAgesBadge } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import Button, { ButtonVariant } from '@/components/Button/Button'
import PreviewImage from '@/components/Admin/PreviewImage'

const AgesForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeBadges = (field: keyof IAgesBadge, value: string, index: number) => {
		const newValue = { ...contentData?.ages_badges[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'ages_badges', newValue, index)
	}

	const onAddBadges = () => {
		onChangeArrayItem(contentData, setContentData, 'ages_badges', DefaultAgesBadge)
	}

	const onDeleteBadges = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'ages_badges', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Ages Title'}
				value={contentData?.ages_title}
				onChange={(e) => setContentData('ages_title', e.target.value)}
			/>
			<Input
				label={'Ages Description'}
				value={contentData?.ages_desc}
				onChange={(e) => setContentData('ages_desc', e.target.value)}
			/>

			{/*Ages Badges Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Badge List
			</Typography>
			{contentData?.ages_badges?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`ages_badges_${i}`}
				>
					<Input
						label={'Title'}
						value={item.title}
						onChange={(e) => onChangeBadges('title', e.target.value, i)}
					/>
					<Input
						label={'Subtitle'}
						value={item.subtitle}
						onChange={(e) => onChangeBadges('subtitle', e.target.value, i)}
					/>
					<PreviewImage src={item.image_url} alt={`image-${i}`} />
					<Input
						label={'Image'}
						value={item.image_url}
						onChange={(e) => onChangeBadges('image_url', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteBadges(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Badges'}
				textSize={TextSize.XSmall}
				onClick={onAddBadges}
			/>
			{/*Ages Badges End*/}
		</Box>
	)
}

export default AgesForm
