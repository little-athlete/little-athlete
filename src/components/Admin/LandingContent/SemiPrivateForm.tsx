import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Input from '@/components/InputField/InputField'
import Box, { BoxDirection } from '@/components/Box'

const SemiPrivateForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Semi Private Title'}
				value={contentData?.semi_private_title}
				onChange={(e) => setContentData('semi_private_title', e.target.value)}
			/>
			<Input
				label={'Semi Private Description'}
				value={contentData?.semi_private_desc}
				onChange={(e) => setContentData('semi_private_desc', e.target.value)}
			/>
			<Input
				label={'Semi Private Image'}
				value={contentData?.semi_private_image_url}
				onChange={(e) => setContentData('semi_private_image_url', e.target.value)}
			/>
		</Box>
	)
}

export default SemiPrivateForm
