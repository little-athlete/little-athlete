// Site-wide settings (singleton) — header + footer + global SEO.

export interface INavLink {
	label: string
	href: string
}

export interface ISiteSettings {
	id: string
	logo_url: string
	nav_links: INavLink[] // header: About Us, Programs, Location, Certifications
	contact_wa_url: string // header "Contact Us" button

	footer_desc: string
	footer_about_links: INavLink[] // Vision and Mission, Achievement
	footer_program_links: INavLink[] // Multi Sports, Basketball and Karate, Multi Instruments, Motoric Class
	footer_more_links: INavLink[] // Location, Certification
	instagram_url: string
	whatsapp_url: string
	copyright_text: string // "© Copyright 2026, All Rights Reserved by Little Athlete"

	seo_default_title: string
	seo_default_description: string
}
