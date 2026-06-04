// Landing page (singleton) — v2 data contract derived from Figma.
// Highlight pattern: `*_accent` is a substring of its paired title, rendered in `text-brand-accent`.

export interface IProgramCard {
	title: string // "School Readiness Program"
	age_label: string // "Toddler (1.5–3yo)"
	image_url: string
}

export interface IStatItem {
	value: string // "4.000"
	label: string // "Little athlete registered"
}

export interface ITestimonial {
	quote: string
	name: string // "Jen** Wil***"
	stars: number // 1–5
}

export interface ILandingPage {
	id: string

	// Hero
	hero_title: string // "Helping your little ones grow through the power of"
	hero_title_accent: string // "Sports & Music"
	hero_button_label: string // "Enjoy the Free Trial"
	hero_button_url: string
	hero_image_url: string // 3-characters PNG

	// Infinite image slider
	slider_images: string[]

	// Our Story
	story_eyebrow: string // "OUR STORY"
	story_title: string // "The First Ever" (primary blue)
	story_title_accent: string // "Semi Private & Sports Music School" (brand-accent)
	story_desc: string
	story_primary_label: string // "Book Free Trial"
	story_primary_url: string
	story_secondary_label: string // "Certifications"
	story_secondary_url: string
	story_image_url: string

	// Programs
	programs_title: string // "From Sports to Music for Kids 1–12yo"
	programs_title_accent: string // "Sports to Music"
	programs_desc: string
	program_cards: IProgramCard[]

	// Stats
	stats_title: string // "The trust that we earned"
	stats_title_accent: string // "trust"
	stats_image_url: string // 2-kids PNG
	stats_items: IStatItem[]

	// Testimonials
	testimony_eyebrow: string // "420+ Happy Parents" (small blue eyebrow)
	testimony_title: string // "Don't just take our words"
	testimony_image_url: string // 2-kids playing music PNG
	testimonials: ITestimonial[]

	// CTA banner
	cta_title: string // "Ready to join the Little Athlete family? 🌟"
	cta_desc: string // "Start with a free trial class — no commitment needed."
	cta_button_label: string // "Start Your Free Trial"
	cta_button_url: string
}
