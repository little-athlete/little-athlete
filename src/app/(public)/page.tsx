import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLandingPage, getSiteSettings } from '@/lib/content'
import { Hero } from '@/components/public/Hero'
import { SliderMarquee } from '@/components/public/SliderMarquee'
import { OurStory } from '@/components/public/OurStory'
import { Programs } from '@/components/public/Programs'
import { Stats } from '@/components/public/Stats'
import { Testimonials } from '@/components/public/Testimonials'
import { CtaBanner } from '@/components/public/CtaBanner'

export async function generateMetadata(): Promise<Metadata> {
	const s = await getSiteSettings()
	if (!s) return {}
	return {
		title: s.seo_default_title,
		description: s.seo_default_description,
		openGraph: {
			title: s.seo_default_title,
			description: s.seo_default_description,
			type: 'website',
		},
	}
}

export default async function HomePage() {
	const data = await getLandingPage()
	if (!data) notFound()

	return (
		<>
			<Hero data={data} />
			<SliderMarquee images={data.slider_images} />
			<OurStory data={data} />
			<Programs data={data} />
			<Stats data={data} />
			<Testimonials data={data} />
			<CtaBanner data={data} />
		</>
	)
}
