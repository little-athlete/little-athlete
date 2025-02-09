import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'

const FacilityForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Title'}
				value={contentData?.facility_title}
				onChange={(e) => setContentData('facility_title', e.target.value)}
			/>
			<Input
				label={'Description'}
				value={contentData?.facility_desc}
				onChange={(e) => setContentData('facility_desc', e.target.value)}
			/>
			<Input
				label={'Image 1'}
				value={contentData?.facility_image_url_1}
				onChange={(e) => setContentData('facility_image_url_1', e.target.value)}
			/>
			<Input
				label={'Image 2'}
				value={contentData?.facility_image_url_2}
				onChange={(e) => setContentData('facility_image_url_2', e.target.value)}
			/>
		</Box>
	)
}

export default FacilityForm
