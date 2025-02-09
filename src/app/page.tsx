import { AmericanFlag } from '@/components/Icon/IconAmericanFlag'
import BaseballIcon from '@/components/Icon/IconBaseball'
import BasketBallIcon from '@/components/Icon/IconBasketball'
import FootballIcon from '@/components/Icon/IconFootball'
import LogoIcon from '@/components/Icon/IconLogo'
import { QuotesIcon } from '@/components/Icon/IconQuotes'
import { StarsIcon } from '@/components/Icon/IconStart'
import TennisIcon from '@/components/Icon/IconTenis'
import MaskingImage1Icon from '@/components/Icon/Masking_1'
import MaskingImage2Icon from '@/components/Icon/Masking_2'
import MaskingImage3Icon from '@/components/Icon/Masking_3'
import MaskingImage4Icon from '@/components/Icon/Masking_4'
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
		{
			country: 'Indonesia',
			imageSrc: '/indonesia.png',
			altText: 'american flag',
			description: 'PERBASI',
		},
	]

	const trainingData = [
		{
			id: 1,
			imageSrc: '/logo.png',
			altText: 'logo',
			title: 'Preschoolers',
			description: '(3-5 y.o)',
			rotation: '-rotate-12',
			position: 'relative top-52 -right-10 z-10 backdrop-blur-sm',
			opacity: 'opacity-0',
		},
		{
			id: 2,
			imageSrc: '/logo-basket.png',
			altText: 'logo',
			title: 'Basketball Training',
			description: '(6-12 y.o)',
			rotation: '',
			position: 'top-10 left-0 backdrop-blur-none',
			opacity: 'opacity-50 ',
		},
		{
			id: 3,
			imageSrc: '/logo-karate.png',
			altText: 'logo',
			title: 'Karate Training',
			description: '(6-12 y.o)',
			rotation: 'rotate-12',
			position: 'relative top-52  z-10 backdrop-blur-xl',
			opacity: 'opacity-50',
		},
	]

	const sportsData = [
		{
			icon: <BasketBallIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Basketball',
			imageSrc: '/program_1.png',
			alt: 'Basketball Image',
			component: (
				<div className="relative">
					<img
						src="/Blob 1.png"
						className="absolute -bottom-1 right-2 h-[90%] w-[90%] lg:bottom-2 lg:right-8 lg:h-[474px] lg:w-[685px]"
					/>
					<MaskingImage1Icon
						src={'/program_1.png'}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
		},
		{
			icon: <FootballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Football',
			imageSrc: '/program_2.png',
			alt: 'Football Image',
			component: (
				<div className="relative">
					<img
						src="/Blob 2.png"
						className="absolute -bottom-1 right-2 h-[90%] w-[90%] rotate-12 lg:bottom-2 lg:right-8 lg:h-[515px] lg:w-[689px]"
					/>
					<MaskingImage2Icon
						src={'/program_2.png'}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
			reverse: true, // untuk mengatur posisi icon dan gambar
		},
		{
			icon: <BaseballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Baseball',
			imageSrc: '/program_3.png',
			component: (
				<div className="relative">
					<img
						src="/Blob 3.png"
						className="absolute right-2 top-0 h-[90%] w-[90%] lg:right-0 lg:top-10 lg:h-[501px] lg:w-[669px]"
					/>
					<MaskingImage3Icon
						src={'/program_3.png'}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
			alt: 'Baseball Image',
		},
		{
			icon: <TennisIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
			name: 'Tennis',
			imageSrc: '/program_4.png',
			alt: 'Tennis Image',
			component: (
				<div className="relative">
					<img
						src="/Blob 4.png"
						className="absolute right-2 top-8 h-[80%] w-[90%] -rotate-3 lg:right-[40px] lg:top-14 lg:h-[490px] lg:w-[680px]"
					/>
					<MaskingImage4Icon
						src={'/program_4.png'}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
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
		{
			id: 4,
			name: 'Darren Kosasih',
			text: 'When an unknown printer took away galley of type and scrambled it to make a type many but also the leap into.',
			rating: 5,
		},
		{
			id: 5,
			name: 'Aldam Trisena',
			text: 'When an unknown printer took away galley of type and scrambled it to make a type many but also the leap into.',
			rating: 5,
		},
	]

	return (
		<main>
			<Header />
			<HeroSection />
			<CredibilitySection data={dataC} />
			<section id="about" className="min-h-screen scroll-mt-24">
				<AboutSection coachingData={coachingData} />
				<FacilitiesSection />
				<AgesSection trainingData={trainingData} />
				<SemiPrivateSection />
				<BannerSection />
			</section>
			<section id="programs" className="scroll-mt-12">
				<OurProgramSection sportsData={sportsData} />
				<RunningTextSection />
				<AddsBannerSection />
			</section>
			<TestimonialSection testimonials={testimonials} />
			<Footer />
		</main>
	)
}
