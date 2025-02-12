import AboutSection from '@/components/landing/AboutUsSection'
import AddsBannerSection from '@/components/landing/AddsBanner'
import AgesSection from '@/components/landing/AgesSection'
import BannerSection from '@/components/landing/BannerSection'
import CredibilitySection from '@/components/landing/CredibilitySection'
import FacilitiesSection from '@/components/landing/FacilitiesSection'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import HeroSection from '@/components/landing/HeroSection'
import OurProgramSection from '@/components/landing/OurProgram'
import RunningTextSection from '@/components/landing/RunningTextSection'
import SemiPrivateSection from '@/components/landing/SemiPrivateSection'
import TestimonialSection from '@/components/landing/TestimonialSection'
import { ILandingPage } from '@/db/firestore/interfaces/landing'
import { getContentData } from '@/db/firestore/landing_page'

export default async function Home() {
	const contentData: ILandingPage = await getContentData()

	console.log({ contentData })
	return (
		<main>
			<Header data={contentData} />
			<HeroSection data={contentData} />
			<CredibilitySection dataContent={contentData} />
			<section id="about" className="min-h-screen scroll-mt-24">
				<AboutSection data={contentData} />
				<FacilitiesSection data={contentData} />
				<AgesSection data={contentData} />
				<SemiPrivateSection data={contentData} />
				<BannerSection data={contentData} />
			</section>
			<section id="programs" className="scroll-mt-12">
				<OurProgramSection data={contentData} />
				<RunningTextSection data={contentData} />
				<AddsBannerSection data={contentData} />
			</section>
			<TestimonialSection data={contentData} />
			<Footer data={contentData} />
		</main>
	)
}

export const revalidate = 0
