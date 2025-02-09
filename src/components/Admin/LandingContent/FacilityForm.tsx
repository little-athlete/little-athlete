import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Box, { BoxDirection } from '@/components/Box'
import Input from '@/components/InputField/InputField'
import PreviewImage from '@/components/Admin/PreviewImage'

const FacilityForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Facility Title'}
				value={contentData?.facility_title}
				onChange={(e) => setContentData('facility_title', e.target.value)}
			/>
			<Input
				label={'Facility Description'}
				value={contentData?.facility_desc}
				onChange={(e) => setContentData('facility_desc', e.target.value)}
			/>
			<PreviewImage src={contentData?.facility_image_url_1} alt={`image-1`} />
			<Input
				label={'Facility Image 1'}
				value={contentData?.facility_image_url_1}
				onChange={(e) => setContentData('facility_image_url_1', e.target.value)}
			/>
			<PreviewImage src={contentData?.facility_image_url_2} alt={`image-2`} />
			<Input
				label={'Facility Image 2'}
				value={contentData?.facility_image_url_2}
				onChange={(e) => setContentData('facility_image_url_2', e.target.value)}
			/>
		</Box>
	)
}

export default FacilityForm
