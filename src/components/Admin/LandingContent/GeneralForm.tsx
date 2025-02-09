import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'
import Typography, { TextSize } from '@/components/Typography/Typography'
import Button, { ButtonVariant } from '@/components/Button/Button'
import { onChangeArrayItem, onDeleteArrayItem } from '@/utils/stateUtils'
import PreviewImage from '@/components/Admin/PreviewImage'

const GeneralForm = ({ contentData, setContentData }: LandingContentProps) => {
	/**
	 * logo_url
	 * running_text
	 * wa_url
	 */
	const onChangeRunningText = (newValue: string, index?: number) => {
		onChangeArrayItem(contentData, setContentData, 'about_coach_images', newValue, index)
	}
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<PreviewImage src={contentData?.logo_url} alt={`image-1`} />
			<Input
				label={'Logo Url'}
				value={contentData?.logo_url}
				onChange={(e) => setContentData('logo_url', e.target.value)}
			/>
			<Input
				label={'WA Url'}
				value={contentData?.wa_url}
				onChange={(e) => setContentData('wa_url', e.target.value)}
			/>

			{/*Running Text Start*/}
			<Typography className="mb-2 block text-sm font-medium text-black">
				Running Text List
			</Typography>
			{contentData?.running_text?.map((item, i) => (
				<Box
					flex
					flexDirection={BoxDirection.Col}
					className={'gap-2'}
					key={`running_text_data${i}`}
				>
					<Input
						label={'Text'}
						value={item}
						onChange={(e) => onChangeRunningText(e.target.value, i)}
					/>
					<Button
						variant={ButtonVariant.Secondary}
						label={'Delete'}
						textSize={TextSize.XSmall}
						onClick={() =>
							onDeleteArrayItem(contentData, setContentData, 'running_text', i)
						}
					/>
				</Box>
			))}
			<Button
				variant={ButtonVariant.Secondary}
				label={'Add Running Text'}
				textSize={TextSize.XSmall}
				onClick={() => onChangeRunningText('Text Running Here')}
			/>
			{/*Running Text End*/}
		</Box>
	)
}
export default GeneralForm
