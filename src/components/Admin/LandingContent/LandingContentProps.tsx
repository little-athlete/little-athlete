import {
	IAboutData,
	IAgesBadge,
	ICredibilityData,
	ILandingPage,
	ILocation,
	IProgramsData,
	ISocialMediaData,
	ITestimonyData,
} from '@/db/firestore/interfaces/landing'
import { FuncSetContent } from '@/utils/stateUtils'

export interface LandingContentProps {
	contentData?: ILandingPage
	setContentData: FuncSetContent<ILandingPage>
}

export const DefaultTestimony: ITestimonyData = {
	name: '',
	star: 5,
	text: '',
}

export const DefaultAbout: IAboutData = {
	country: '',
	image_url: '',
	alt_text: '',
	desc: '',
}

export const DefaultLocation: ILocation = {
	address: '',
	title: '',
	link_title: '',
	link: '',
}

export const DefaultPrograms: IProgramsData = {
	alt_text: '',
	name: '',
	reverse: false,
	image_url: '',
}

export const DefaultSocialMedia: ISocialMediaData = {
	name: '',
	url: '',
	logo: '',
}

export const DefaultCredibility: ICredibilityData = {
	label: '',
	value: '',
}

export const DefaultAgesBadge: IAgesBadge = {
	image_url: '',
	subtitle: '',
	title: '',
}
