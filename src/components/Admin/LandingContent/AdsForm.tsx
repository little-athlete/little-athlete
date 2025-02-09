import React from 'react'
import { LandingContentProps } from '@/components/Admin/LandingContent/LandingContentProps'
import Input from '@/components/InputField/InputField'

const AdsForm = ({ contentData, setContentData }: LandingContentProps) => {
	return (
		<div className="mt-8 flex flex-col gap-4">
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
		</div>
	)
}

export default AdsForm
