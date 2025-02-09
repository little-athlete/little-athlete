import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'

const HeroForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Hero Title'}
				value={contentData?.hero_title}
				onChange={(e) => setContentData('hero_title', e.target.value)}
			/>
			<Input
				label={'Hero Description'}
				value={contentData?.hero_desc}
				onChange={(e) => setContentData('hero_desc', e.target.value)}
			/>
			<Input
				label={'Hero Image'}
				value={contentData?.hero_image_url}
				onChange={(e) => setContentData('hero_image_url', e.target.value)}
			/>
			<Input
				label={'Hero Button Text'}
				value={contentData?.hero_button_title}
				onChange={(e) => setContentData('hero_button_title', e.target.value)}
			/>
			<Input
				label={'Hero Button Url'}
				value={contentData?.hero_button_url}
				onChange={(e) => setContentData('hero_button_url', e.target.value)}
			/>
		</Box>
	)
}

export default HeroForm
