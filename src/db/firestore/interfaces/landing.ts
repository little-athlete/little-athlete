export interface ILandingPage {
	about_coach_images: string[]
	about_data: IAboutData[]
	about_desc: string
	about_subtitle: string
	about_title: string
	ads_title: string
	ads_wa_url: string
	ages_badges: IAgesBadge[]
	ages_desc: string
	ages_title: string
	banner_button_text: string
	banner_button_url: string
	banner_desc: string
	banner_title: string
	credibility_data: ICredibilityData[]
	credibility_desc: string
	credibility_title: string
	facility_desc: string
	facility_image_url_1: string
	facility_image_url_2: string
	facility_title: string
	hero_button_title: string
	hero_button_url: string
	hero_desc: string
	hero_image_url: string
	hero_title: string
	id: string
	locations: ILocation[]
	logo_url: string
	programs_data: IProgramsData[]
	programs_title: string
	running_text: string[]
	semi_private_desc: string
	semi_private_image_url: string
	semi_private_title: string
	social_media_data: ISocialMediaData[]
	testimony_data: ITestimonyData[]
	testimony_title: string
	wa_url: string
}

export interface ITestimonyData {
	name?: string
	star?: number
	text?: string
}

export interface IAboutData {
	country?: string
	image_url?: string
	alt_text?: string
	desc?: string
}

export interface ILocation {
	address?: string
	title?: string
	link_title?: string
	link?: string
}

export interface IProgramsData {
	alt_text?: string
	name?: string
	reverse?: boolean
	image_url?: string
}

export interface ISocialMediaData {
	name?: string
	url?: string
	logo?: string
}

export interface ICredibilityData {
	label?: string
	value?: string
}

export interface IAgesBadge {
	image_url?: string
	subtitle?: string
	title?: string
}
