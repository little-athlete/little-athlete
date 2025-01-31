import { AmericanFlag } from '@/components/Icon/IconAmericanFlag'
import BaseballIcon from '@/components/Icon/IconBaseball'
import BasketBallIcon from '@/components/Icon/IconBasketball'
import FootballIcon from '@/components/Icon/IconFootball'
import LogoIcon from '@/components/Icon/IconLogo'
import { QuotesIcon } from '@/components/Icon/IconQuotes'
import { StarsIcon } from '@/components/Icon/IconStart'
import TennisIcon from '@/components/Icon/IconTenis'
import WhastappIcon from '@/components/Icon/IconWa'
import IconWhatsApp from '@/components/Icon/IconWa'
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
import Image from 'next/image'

export default function Home() {
	const dataC = [
		{
			value: 500,
			label: 'Future Athletes Registered',
		},
		{
			value: 10,
			label: 'Internationally Certified Coaches',
		},
		{
			value: 7,
			label: 'Sessions per Day',
		},
		{
			value: 4,
			label: 'Sports Categories',
		},
		{
			value: 2,
			label: 'Locations',
		},
	]

	const navLinks = [
		{ href: '#credibility', label: 'Our Credibility' },
		{ href: '#about', label: 'About Us' },
		{ href: '#programs', label: 'Programs' },
		{ href: '#testimonials', label: 'Testimonials' },
	]

	const coachingData = [
		{
			country: 'United States of America',
			imageSrc: '/united states.png',
			altText: 'american flag',
			description: 'Multi-Sports Kids Coaching',
		},
		{
			country: 'Singapore',
			imageSrc: '/singapore.png',
			altText: 'american flag',
			description: 'Multi-Sports Kids Coaching',
		},
		{
			country: 'Spain',
			imageSrc: '/spain.png',
			altText: 'american flag',
			description: 'Mini-Basketball',
		},
	]

	const trainingData = [
		{
			id: 1,
			imageSrc: '/logo.png',
			altText: 'logo',
			title: 'Preschoolers',
			description: '(3-5 y.o)',
		},
		{
			id: 2,
			imageSrc: '/logo-basket.png',
			altText: 'logo',
			title: 'Basketball Training',
			description: '(6-12 y.o)',
		},
	]

	const sportsData = [
		{
			icon: <BasketBallIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Basketball',
			imageSrc: '/program.png',
			alt: 'Basketball Image',
		},
		{
			icon: <FootballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Football',
			imageSrc: '/img_football.png',
			alt: 'Football Image',
			reverse: true, // untuk mengatur posisi icon dan gambar
		},
		{
			icon: <BaseballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Baseball',
			imageSrc: '/img_baseball.png',
			alt: 'Baseball Image',
		},
		{
			icon: <TennisIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Tennis',
			imageSrc: '/img_tennis.png',
			alt: 'Tennis Image',
			reverse: true,
		},
	]

	const testimonials = [
		{
			id: 1,
			name: 'Jessica Miyako',
			text: 'When an unknown printer took away galley of type and scrambled it to make a type many but also the leap into.',
			rating: 5,
		},
		{
			id: 2,
			name: 'Darren Kosasih',
			text: 'When an unknown printer took away galley of type and scrambled it to make a type many but also the leap into.',
			rating: 5,
		},
		{
			id: 3,
			name: 'Vincent Rompies',
			text: 'When an unknown printer took away galley of type and scrambled it to make a type many but also the leap into.',
			rating: 5,
		},
	]

	return (
		<main>
			<Header />
			<HeroSection />
			<CredibilitySection data={dataC} />
			<section id="about" className="min-h-screen">
				<AboutSection coachingData={coachingData} />
				<FacilitiesSection />
				<AgesSection trainingData={trainingData} />
				<SemiPrivateSection />
				<BannerSection />
			</section>
			<section id="programs">
				<OurProgramSection sportsData={sportsData} />
				<RunningTextSection />
				<AddsBannerSection />
			</section>
			<TestimonialSection testimonials={testimonials} />
			<Footer />
		</main>
	)
}
