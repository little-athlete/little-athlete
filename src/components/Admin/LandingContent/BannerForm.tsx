import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'

const BannerForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Banner Title'}
				value={contentData?.banner_title}
				onChange={(e) => setContentData('banner_title', e.target.value)}
			/>
			<Input
				label={'Banner Description'}
				value={contentData?.banner_desc}
				onChange={(e) => setContentData('banner_desc', e.target.value)}
			/>
			<Input
				label={'Banner Button Text'}
				value={contentData?.banner_button_text}
				onChange={(e) => setContentData('banner_button_text', e.target.value)}
			/>
			<Input
				label={'Banner Button URL'}
				value={contentData?.banner_button_url}
				onChange={(e) => setContentData('banner_button_url', e.target.value)}
			/>
		</Box>
	)
}

export default BannerForm
