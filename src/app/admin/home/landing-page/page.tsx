'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Typography, { FontWeight, TextSize } from '@/components/Typography/Typography'
import { getContentData, saveContentData } from '@/db/firestore/landing_page'
import Input, { InputType } from '@/components/InputField/InputField'
import AboutForm from '@/components/Admin/LandingContent/AboutForm'
import AdsForm from '@/components/Admin/LandingContent/AdsForm'
import AgesForm from '@/components/Admin/LandingContent/AgesForm'
import CredibilityForm from '@/components/Admin/LandingContent/CredibilityForm'
import BannerForm from '@/components/Admin/LandingContent/BannerForm'
import FacilityForm from '@/components/Admin/LandingContent/FacilityForm'
import GeneralForm from '@/components/Admin/LandingContent/GeneralForm'
import HeroForm from '@/components/Admin/LandingContent/HeroForm'
import LocationForm from '@/components/Admin/LandingContent/LocationForm'
import ProgramForm from '@/components/Admin/LandingContent/ProgramForm'
import SemiPrivateForm from '@/components/Admin/LandingContent/SemiPrivateForm'
import SocialMediaForm from '@/components/Admin/LandingContent/SocialMediaForm'
import TestimonyForm from '@/components/Admin/LandingContent/TestimonyForm'
import { ILandingPage } from '@/db/firestore/interfaces/landing'
import { FuncSetContent } from '@/utils/stateUtils'
import Button, { ButtonVariant } from '@/components/Button/Button'

const Section = {
	Placeholder: 'Select Section',
	About: 'About Section',
	Ads: 'Ads Section',
	Ages: 'Ages Section',
	Banner: 'Banner Section',
	Credibility: 'Credibility Section',
	Facility: 'Facility Section',
	General: 'General Section',
	Hero: 'Hero Section',
	Location: 'Location Section',
	Program: 'Program Section',
	SemiPrivate: 'Semi Private Section',
	SocialMedia: 'Social Media Section',
	Testimony: 'Testimony Section',
}

const itemsOptions = Object.values(Section).map((item) => ({
	value: item,
	label: item,
	disabled: item === Section.Placeholder,
}))

const LandingPage = () => {
	const [selectedSection, setSelectedSection] = useState(Section.Placeholder)
	const [contentData, setContentData] = useState<ILandingPage>()
	const [loading, setLoading] = useState(false)

	const fetchContentData = useCallback(async () => {
		const data = await getContentData()
		setContentData(data)
	}, [])

	useEffect(() => {
		if (!contentData?.id) {
			fetchContentData()
		}
	}, [contentData?.id, fetchContentData])

	const onChangeContentData: FuncSetContent<ILandingPage> = (field, value) => {
		setContentData((old) => ({ ...old, [field]: value }) as ILandingPage)
	}

	const onContentDataSave = async () => {
		setLoading(true)
		await saveContentData(contentData as ILandingPage)
		setLoading(false)
		console.log('Success')
	}

	const renderSection = () => {
		switch (selectedSection) {
			case Section.About:
				return <AboutForm contentData={contentData} setContentData={onChangeContentData} />
			case Section.Ads:
				return <AdsForm contentData={contentData} setContentData={onChangeContentData} />
			case Section.Ages:
				return <AgesForm contentData={contentData} setContentData={onChangeContentData} />
			case Section.Banner:
				return <BannerForm contentData={contentData} setContentData={onChangeContentData} />
			case Section.Credibility:
				return (
					<CredibilityForm
						contentData={contentData}
						setContentData={onChangeContentData}
					/>
				)
			case Section.Facility:
				return (
					<FacilityForm contentData={contentData} setContentData={onChangeContentData} />
				)
			case Section.General:
				return (
					<GeneralForm contentData={contentData} setContentData={onChangeContentData} />
				)
			case Section.Hero:
				return <HeroForm contentData={contentData} setContentData={onChangeContentData} />
			case Section.Location:
				return (
					<LocationForm contentData={contentData} setContentData={onChangeContentData} />
				)
			case Section.Program:
				return (
					<ProgramForm contentData={contentData} setContentData={onChangeContentData} />
				)
			case Section.SemiPrivate:
				return (
					<SemiPrivateForm
						contentData={contentData}
						setContentData={onChangeContentData}
					/>
				)
			case Section.SocialMedia:
				return (
					<SocialMediaForm
						contentData={contentData}
						setContentData={onChangeContentData}
					/>
				)
			case Section.Testimony:
				return (
					<TestimonyForm contentData={contentData} setContentData={onChangeContentData} />
				)
		}
	}

	return (
		<div className="flex flex-col gap-4">
			<Typography fontWeight={FontWeight.SemiBold} size={TextSize.MediumLarge}>
				Landing Page Content Data
			</Typography>

			<Input
				type={InputType.Select}
				options={itemsOptions}
				value={selectedSection}
				onChange={(e) => setSelectedSection(e.target.value)}
			/>

			{renderSection()}

			{selectedSection !== Section.Placeholder && (
				<Button
					variant={ButtonVariant.Secondary}
					label={'Save'}
					textSize={TextSize.XSmall}
					onClick={onContentDataSave}
					isLoading={loading}
					containerClassName={'self-end bg-blue-500 hover:bg-blue-700'}
				/>
			)}
		</div>
	)
}
export default LandingPage
