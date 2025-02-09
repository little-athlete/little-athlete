import React from 'react'
import Input, { InputType } from '@/components/InputField/InputField'
import {
	DefaultAbout,
	LandingContentProps,
} from '@/components/Admin/LandingContent/LandingContentProps'
import Button, { ButtonVariant } from '@/components/Button/Button'
import Typography, { TextSize } from '@/components/Typography/Typography'
import { IAboutData } from '@/db/firestore/interfaces/landing'
import Box, { BoxDirection } from '@/components/Box'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import PreviewImage from '@/components/Admin/PreviewImage'

const AboutForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeCoachImages = (newValue: string, index?: number) => {
		onChangeArrayItem(contentData, setContentData, 'about_coach_images', newValue, index)
	}

	const onChangeAboutData = (field: keyof IAboutData, value: string, index: number) => {
		const newValue = { ...contentData?.about_data?.[index], [field]: value }
		onChangeArrayItem(contentData, setContentData, 'about_data', newValue, index)
	}

	const onAddAboutData = () => {
		onChangeArrayItem(contentData, setContentData, 'about_data', DefaultAbout)
	}

	const onDeleteAboutData = (index: number) => {
		onDeleteArrayItem(contentData, setContentData, 'about_data', index)
	}

	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'About Title'}
				value={contentData?.about_title}
				onChange={(e) => setContentData('about_title', e.target.value)}
			/>

			<Input
				label={'About Subtitle'}
				value={contentData?.about_subtitle}
				onChange={(e) => setContentData('about_subtitle', e.target.value)}
			/>

			<Input
				type={InputType.Textarea}
				label={'About Description'}
				value={contentData?.about_desc}
				onChange={(e) => setContentData('about_desc', e.target.value)}
			/>

			{/*About Coach Image Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				About Coach Images
			</Typography>
			{contentData?.about_coach_images?.map((item, i) => (
				<Box flex className={'gap-2'} key={`coach-image-${i}`}>
					<Box className={'flex-1'}>
						<PreviewImage src={item} alt={`image-${i}`} />
						<Input
							type={InputType.Url}
							value={item}
							onChange={(e) => onChangeCoachImages(e.target.value, i)}
						/>
					</Box>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() =>
							onDeleteArrayItem(contentData, setContentData, 'about_coach_images', i)
						}
						containerClassName={'self-end'}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Coach Image'}
				textSize={TextSize.XSmall}
				onClick={() => onChangeCoachImages('https://images.com')}
			/>
			{/*About Coach Image End*/}

			{/*About Data Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				About Data List
			</Typography>
			{contentData?.about_data?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`about_data_${i}`}
				>
					<Input
						label={'Country Name'}
						value={item.country}
						onChange={(e) => onChangeAboutData('country', e.target.value, i)}
					/>
					<PreviewImage src={item.image_url} alt={item.alt_text} />
					<Input
						label={'Image'}
						value={item.image_url}
						onChange={(e) => onChangeAboutData('image_url', e.target.value, i)}
					/>
					<Input
						label={'Image Alt Text'}
						value={item.alt_text}
						onChange={(e) => onChangeAboutData('alt_text', e.target.value, i)}
					/>
					<Input
						label={'Description'}
						value={item.desc}
						onChange={(e) => onChangeAboutData('desc', e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onDeleteAboutData(i)}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add About Data'}
				textSize={TextSize.XSmall}
				onClick={onAddAboutData}
			/>
			{/*About Data End*/}
		</Box>
	)
}

export default AboutForm
