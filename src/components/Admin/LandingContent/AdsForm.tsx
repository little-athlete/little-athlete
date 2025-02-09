import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Input from '@/components/InputField/InputField'
import Box, { BoxDirection } from '@/components/Box'

const AdsForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<Box flex flexDirection={BoxDirection.Col} className={'mt-8 gap-4'}>
			<Input
				label={'Ads Title'}
				value={contentData?.ads_title}
				onChange={(e) => setContentData('ads_title', e.target.value)}
			/>
			<Input
				label={'Ads WA Url'}
				value={contentData?.ads_wa_url}
				onChange={(e) => setContentData('ads_wa_url', e.target.value)}
			/>
		</Box>
	)
}

export default AdsForm
