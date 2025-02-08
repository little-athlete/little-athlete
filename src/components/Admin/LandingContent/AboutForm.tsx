import React from 'react'
import Input, { InputType } from '@/components/InputField/InputField'
import {
	LandingContentProps,
	onChangeArray,
} from '@/components/Admin/LandingContent/LandingContentProps'
import Button, { ButtonVariant } from '@/components/Button/Button'
import Typography, { TextSize } from '@/components/Typography/Typography'
import { IAboutData } from '@/db/firestore/interfaces/landing'

const AboutForm = ({ contentData, setContentData }: LandingContentProps) => {
	const onChangeCoachImages = (newValue: string, index?: number) => {
		onChangeArray(
			contentData?.about_coach_images,
			setContentData,
			'about_coach_images',
			newValue,
			index
		)
	}

	const onChangeAboutData = (field: keyof IAboutData, value: string, index: number) => {
		const aboutData = [...(contentData?.about_data || [])]
		const newValue = { ...aboutData[index], [field]: value }
		onChangeArray(contentData?.about_data, setContentData, 'about_data', newValue, index)
	}

	const onAddAboutData = () => {
		const newValue: IAboutData = { country: '', image_url: '', alt_text: '', desc: '' }
		onChangeArray(contentData?.about_data, setContentData, 'about_data', newValue)
	}

	const onDeleteAboutData = (index: number) => {
		const aboutData = contentData?.about_data?.filter((_, i) => i !== index)
		setContentData('about_data', aboutData)
	}

	return (
		<div className="mt-8 flex flex-col gap-4">
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
				<div className={'flex gap-2'} key={`coach-image-${i}`}>
					<Input
						className={'flex-1'}
						type={InputType.Url}
						value={item}
						onChange={(e) => onChangeCoachImages(e.target.value, i)}
					/>

					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() => onChangeCoachImages('', i)}
					/>
				</div>
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
				<div className="flex flex-col gap-2" key={`about_data_${i}`}>
					<Input
						label={'Country Name'}
						value={item.country}
						onChange={(e) => onChangeAboutData('country', e.target.value, i)}
					/>
					<Input
						label={'Image Url'}
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
				</div>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add About Data'}
				textSize={TextSize.XSmall}
				onClick={onAddAboutData}
			/>
			{/*About Data End*/}
		</div>
	)
}

export default AboutForm
