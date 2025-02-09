import React from 'react'
import {
	DefaultSocialMedia,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import { ISocialMediaData } from '@/db/firestore/interfaces/landing'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import Box, { BoxDirection } from '@/components/Box'
import Typography, { TextSize } from '@/components/Typography/Typography'
import Input from '@/components/InputField/InputField'
import Button, { ButtonVariant } from '@/components/Button/Button'
import PreviewImage from '@/components/Admin/PreviewImage'

const SocialMediaForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeSocialMedia = (field: keyof ISocialMediaData, value: string, index: number) => {
		const newValue = { ...contentData?.social_media_data[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'social_media_data', newValue, index)
	}

	const onAddSocialMedia = () => {
		onChangeArrayItem(contentData, setContentData, 'social_media_data', DefaultSocialMedia)
	}

	const onDeleteSocialMedia = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'social_media_data', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			{/*Social Media Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Social Media List
			</Typography>
			{contentData?.social_media_data?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`social_media_data_${i}`}
				>
					<Input
						label={'Social Name'}
						value={item.name}
						onChange={(e) => onChangeSocialMedia('name', e.target.value, i)}
					/>
					<Input
						label={'Social Link'}
						value={item.url}
						onChange={(e) => onChangeSocialMedia('url', e.target.value, i)}
					/>
					<PreviewImage src={item.logo} alt={`image-${i}`} />
					<Input
						label={'Social Logo'}
						value={item.logo}
						onChange={(e) => onChangeSocialMedia('logo', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteSocialMedia(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Social'}
				textSize={TextSize.XSmall}
				onClick={() => onAddSocialMedia()}
			/>
			{/*Social Media Data End*/}
		</Box>
	)
}

export default SocialMediaForm
