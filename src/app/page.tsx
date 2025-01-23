'use client'

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
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50) // Jika scroll lebih dari 50px
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return (
		<main>
			{/* Header */}
			<header
				className={`fixed left-0 top-0 z-50 w-full py-2 ${
					isScrolled ? 'bg-white shadow-md' : 'bg-primary'
				} transition-all duration-300`}
			>
				<div className="container mx-auto flex flex-wrap items-center justify-between px-6">
					<div className="logo md:order-1">
						<Image
							src="/logo-header.png"
							alt="Logo"
							className="h-[43px] w-[43px] lg:h-[80px] lg:w-[80px]"
							width={89}
							height={89}
						/>
					</div>
					<nav className="order-last mt-4 flex w-full justify-between md:order-2 md:flex lg:mt-0 lg:w-auto lg:space-x-14">
						{navLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								className="text-xs font-medium text-black hover:text-blue-700 lg:text-base"
							>
								{link.label}
							</a>
						))}
					</nav>

					<div className="md:order-3">
						<button className="flex items-center rounded-full border-2 border-border bg-white px-4 py-1 text-base font-semibold text-black lg:px-6 lg:py-2">
							<WhastappIcon className="mt-[1px] h-[16px] w-[16px] lg:h-[32px] lg:w-[32px]" />
							<span className="text-sm lg:text-base xl:ml-2">Chat with us</span>
						</button>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			{/* <section className="relative mt-20">
				<div className="flex h-[600px] items-center justify-end bg-[url('/hero.png')] bg-contain bg-no-repeat">
					<div className="flex h-full w-[55%] items-center">
						<div className="bg-linear-primary w-[70%]">
							<p className="text-5xl font-bold leading-[60px]">
								Nurturing Young Athletes Through Fun and Engaging Sports Programs
							</p>
							<p className="mt-4 text-xl">
								Let your child discover the joy of sports with our engaging programs
							</p>
							<button className="mt-6 flex w-[184px] items-center justify-center rounded-full border-2 border-border bg-white px-6 py-3 text-base font-semibold text-black">
								More Info
							</button>
						</div>
					</div>
				</div>
			</section> */}

			<section className="relative mt-20 bg-white">
				<div className="">
					<div className="flex h-[430px] w-full items-center bg-[url('/hero.png')] bg-contain bg-no-repeat lg:h-[600px]">
						<div className="bg-linear-primary relative h-full w-full">
							<div className="absolute bottom-[5%] px-2 lg:bottom-[15%] lg:left-[45%] lg:w-[500px]">
								<p className="text-2xl font-bold lg:text-5xl lg:leading-[60px]">
									Nurturing Young Athletes Through Fun and Engaging Sports
									Programs
								</p>
								<p className="mt-2 text-base lg:mt-4 lg:text-xl">
									Let your child discover the joy of sports with our engaging
									programs
								</p>
								<button className="mt-4 flex w-[167px] items-center justify-center rounded-full border-2 border-border bg-white py-2 text-xs font-semibold text-black lg:mt-6 lg:w-[184px] lg:px-6 lg:py-3 lg:text-base">
									More Info
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Hero Section */}
			{/* <section className="relative mt-20 bg-white">
				<div className="container mx-auto">
					<div className="flex h-[430px] w-full items-center bg-[url('/hero.png')] bg-contain bg-no-repeat lg:h-[600px]">
						<div className="bg-linear-primary relative h-full w-full">
							<div className="absolute bottom-[15%] left-[45%] w-[500px]">
								<p className="text-5xl font-bold leading-[60px]">
									Nurturing Young Athletes Through Fun and Engaging Sports
									Programs
								</p>
								<p className="mt-4 text-xl">
									Let your child discover the joy of sports with our engaging
									programs
								</p>
								<button className="mt-6 flex w-[184px] items-center justify-center rounded-full border-2 border-border bg-white px-6 py-3 text-base font-semibold text-black">
									More Info
								</button>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Credibility Section */}
			<section id="credibility" className="bg-yellow-400 py-12 md:py-24">
				<div className="container mx-auto px-6 lg:text-center">
					<h2 className="mb-4 text-2xl font-bold text-black lg:text-[2.625rem]">
						Our Credibility
					</h2>
					<p className="mb-8 text-sm text-black lg:mb-12 lg:text-base">
						For almost 2 years, we have grown so fast, delivering high-quality programs
						for future athletes and satisfied parents.
					</p>

					<div className="grid grid-cols-2 gap-6 md:grid-cols-5">
						{dataC.map((el, i) => (
							<div
								key={i}
								className="rounded-2xl bg-secondary p-6 text-center text-white shadow-md transition duration-300 hover:scale-105"
							>
								<p className="mb-2 text-[2rem] font-bold lg:text-5xl">{el.value}</p>
								<p className="text-xs lg:mt-6 lg:text-base">{el.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="bg-secondary py-12 text-white lg:py-16">
				<div className="container mx-auto px-6">
					<p className="mb-8 font-jakarta_sans text-sm font-bold text-white lg:mb-12 lg:text-center lg:text-base">
						ABOUT US
					</p>
					<h2 className="mb-12 text-2xl font-bold text-white lg:text-center lg:text-[42px]">
						Our Passion, Your Advantage
					</h2>

					<div className="flex flex-wrap items-center justify-center gap-12">
						<div className="w-full lg:w-[524px]">
							<h3 className="mb-12 text-[2rem] font-extrabold">
								Internationally Certified Coaches
							</h3>
							<p className="mb-9 text-base lg:mb-14">
								We believe in providing the best for our young learners. Our
								internationally certified coaches bring a wealth of knowledge and
								experience to every session, creating a supportive and enriching
								environment for children to thrive.
							</p>

							<ul className="space-y-4">
								{coachingData.map((item, index) => (
									<li
										key={index}
										className={`flex w-full items-center gap-8 rounded-2xl bg-card-001 p-6 lg:w-[427px]`}
									>
										<Image
											src={item.imageSrc}
											width={48}
											height={48}
											alt={item.altText}
											className="h-[30px] w-[30px] lg:h-[48px] lg:w-[48px]"
										/>
										<div>
											<p className="text-sm font-bold lg:text-lg">
												{item.country}
											</p>
											<p className="text-sm lg:text-lg">{item.description}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className="-mb-24 flex gap-4 lg:-mb-32 lg:w-[40%] lg:gap-10">
							<div>
								<div className="rounded-2xl">
									<img
										src="/people.png"
										alt="Coach 1"
										className="mb-4 rounded-2xl"
									/>
								</div>
								<div className="rounded-2xl">
									<img src="/people2.png" alt="Coach 2" className="rounded-2xl" />
								</div>
							</div>
							<div className="block rounded-md lg:-mb-8">
								<div className="rounded-2xl">
									<img
										src="/people3.png"
										alt="Coach 3"
										className="mt-20 rounded-2xl lg:mt-32"
									/>
								</div>
								<div className="rounded-2xl">
									<img
										src="/people4.png"
										alt="Coach 4"
										className="mt-4 rounded-2xl"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			{/* <section id="about" className="bg-secondary py-16 text-white">
				<div className="container mx-auto px-6">
					<p className="mb-12 text-center font-jakarta_sans text-base font-bold text-white">
						ABOUT US
					</p>
					<h2 className="mb-12 text-center text-[42px] font-bold text-white">
						Our Passion, Your Advantage
					</h2>

					<div className="flex items-center justify-center gap-12">
						<div className="w-[524px]">
							<h3 className="mb-12 text-[2rem] font-bold">
								Internationally Certified Coaches
							</h3>
							<p className="mb-14 text-base">
								We believe in providing the best for our young learners. Our
								internationally certified coaches bring a wealth of knowledge and
								experience to every session, creating a supportive and enriching
								environment for children to thrive.
							</p>

							<ul className="space-y-4">
								<li className="linear-border flex w-[427px] items-center gap-8 rounded-2xl bg-card-001 p-6">
									<Image
										src={'/united states.png'}
										width={48}
										height={48}
										alt="american flag"
									/>
									<div>
										<p className="text-lg font-bold">
											United States of America
										</p>
										<p className="text-lg">Multi-Sports Kids Coaching</p>
									</div>
								</li>
								<li className="linear-border flex w-[427px] items-center gap-8 rounded-2xl bg-card-001 p-6">
									<Image
										src={'/singapore.png'}
										width={48}
										height={48}
										alt="american flag"
									/>
									<div>
										<p className="text-lg font-bold">Singapore</p>
										<p className="text-lg">Multi-Sports Kids Coaching</p>
									</div>
								</li>
								<li className="linear-border flex w-[427px] items-center gap-8 rounded-2xl bg-card-001 p-6">
									<Image
										src={'/spain.png'}
										width={48}
										height={48}
										alt="american flag"
									/>
									<div>
										<p className="text-lg font-bold">Spain</p>
										<p className="text-lg">Mini-Basketball</p>
									</div>
								</li>
							</ul>
						</div>

						<div className="-mb-32 flex w-[40%] gap-10">
							<div>
								<div className="rounded-2xl">
									<img
										src="/people.png"
										alt="Coach 1"
										className="mb-4 rounded-2xl"
									/>
								</div>
								<div className="rounded-2xl">
									<img src="/people2.png" alt="Coach 2" className="rounded-2xl" />
								</div>
							</div>
							<div className="-mb-8 block rounded-md">
								<div className="rounded-2xl">
									<img
										src="/people3.png"
										alt="Coach 3"
										className="mt-32 rounded-2xl"
									/>
								</div>
								<div className="rounded-2xl">
									<img
										src="/people4.png"
										alt="Coach 4"
										className="mt-4 rounded-2xl"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Semi-Private Section */}
			<section className="bg-white">
				<div className="mx-auto">
					<div className="flex w-full flex-wrap lg:flex-nowrap">
						<div className="order-2 w-full bg-secondary lg:order-1">
							<Image
								src="/class-people.png"
								alt="Class"
								className="h-full w-full"
								width={700}
								height={600}
							/>
						</div>
						<div className="order-1 mx-auto flex items-center justify-center px-4 pb-14 pt-20 lg:order-2 lg:pt-0">
							<div>
								<h3 className="mb-4 text-[32px] font-bold text-black lg:text-center">
									Semi-Private Multi Sport Class
								</h3>
								<p className="mx-auto text-base text-gray-002 lg:w-3/4 lg:text-center">
									The best of both worlds: Our semi-private classes combine the
									individualized attention of private coaching with the social
									benefits and affordability of group classes.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ages */}
			<section className="bg-secondary py-16">
				<div className="container mx-auto px-4 lg:px-6">
					<div className="flex flex-wrap items-center justify-center lg:flex-nowrap">
						<div className="lg:w-[55%]">
							<p className="mb-11 text-[2rem] font-extrabold leading-10 text-white lg:w-[75%]">
								Designed Exclusively for Fun but Serious
							</p>
							<p className="text-sm lg:w-[65%]">
								We believe in making learning fun! Our unique approach combines
								serious skill development with exciting games and activities,
								ensuring children stay motivated and engaged while mastering new
								sports.
							</p>
						</div>

						<div className="mt-4 flex w-full gap-5 lg:mt-0 lg:w-auto lg:gap-6">
							{trainingData.map((item) => (
								<div
									key={item.id}
									className="box-border flex w-full items-center justify-center rounded-2xl bg-card-001 px-3 py-7 lg:h-[300px] lg:w-[250px]"
								>
									<div className="">
										<div className="mb-4 flex items-center justify-center lg:mb-6">
											<Image
												src={item.imageSrc}
												width={150}
												height={150}
												alt={item.altText}
												className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]"
											/>
										</div>
										<p className="text-center text-sm font-bold lg:text-lg">
											{item.title}
										</p>
										<p className="text-center text-sm lg:text-lg">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* <div className="flex gap-6">
							<div className="flex h-[300px] w-[250px] items-center justify-center rounded-2xl bg-card-001">
								<div>
									<div className="mb-6">
										<Image
											src={'/logo.png'}
											width={150}
											height={150}
											alt="logo"
										/>
									</div>
									<p className="text-center text-lg font-bold">Preschoolers </p>
									<p className="text-center text-lg">(3-5 y.o)</p>
								</div>
							</div>
							<div className="flex h-[300px] w-[250px] items-center justify-center rounded-2xl bg-card-001">
								<div>
									<div className="mx-auto mb-6 w-[150px]">
										<Image
											src={'/logo-basket.png'}
											width={150}
											height={150}
											alt="logo"
										/>
									</div>
									<p className="text-center text-lg font-bold">
										Basketball Training
									</p>
									<p className="text-center text-lg">(6-12 y.o)</p>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>

			{/* BAnner */}

			<section className="bg-primary py-3">
				<div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-6 lg:gap-8">
					<p className="text-base font-semibold text-black lg:text-2xl">
						Curious about our programs?
					</p>
					<button className="flex items-center rounded-full border-2 border-border bg-white px-4 py-1 text-base font-semibold text-black lg:px-6 lg:py-2">
						<WhastappIcon className="mt-[1px] h-[16px] w-[16px] lg:h-[32px] lg:w-[32px]" />
						<span className="text-sm lg:text-base xl:ml-2">Chat with us</span>
					</button>
				</div>
			</section>

			<section className="bg-white pb-16 pt-24" id="programs">
				<div className="container mx-auto px-6">
					<p className="mb-8 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-base font-bold text-transparent lg:text-center">
						OUR PROGRAMS
					</p>
					<p className="text-[2rem] font-extrabold text-black lg:text-center">
						Designed for Fun but Serious
					</p>

					<div>
						{sportsData.map((sport, index) => (
							<div
								key={index}
								className={`flex flex-wrap items-center justify-center gap-1 lg:flex-nowrap lg:gap-12 ${
									sport.reverse ? 'lg:flex-row-reverse' : ''
								}`}
							>
								<div>
									<div className="flex justify-center">{sport.icon}</div>
									<p className="mt-2 text-[2rem] font-extrabold text-c-blue-200 lg:mt-4 lg:text-4xl">
										{sport.name}
									</p>
								</div>
								<Image
									src={sport.imageSrc}
									width={700}
									height={600}
									alt={sport.alt}
									className="w-full lg:h-[600px] lg:w-[700px]"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-primary py-3">
				<div className="container mx-auto flex items-center justify-center gap-8 overflow-hidden lg:px-6">
					<div className="whitespace-nowrap text-2xl font-semibold text-black">
						and we are still developing other programs, stay tuned
					</div>
					<LogoIcon />
					<p className="whitespace-nowrap text-2xl font-semibold text-black">
						and we are still developing other programs, stay tuned
					</p>
				</div>
			</section>

			<section className="bg-white pb-16 pt-24">
				<div className="container mx-auto px-6">
					<div className="grid w-full place-items-center">
						<div className="flex h-[450px] rounded-[10px] bg-[url('/banner.png')] bg-contain bg-no-repeat lg:h-[237px] lg:w-[1141px] lg:bg-right">
							<div className="bg-linear-secondary flex w-full items-end justify-end rounded-xl lg:block">
								<div className="my-12 pl-4 pr-4 lg:w-[70%] lg:pl-12">
									<div className="">
										<p className="text-xl font-bold text-white lg:text-[2rem]">
											Mom, Dad, what are you waiting for?
										</p>
										<p className="mt-1 text-sm text-white lg:text-xl">
											Join us for one month free trial
										</p>
									</div>
									<button className="mt-6 flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
										Start Free Trial
									</button>
								</div>
							</div>
							{/* <div className="my-12 w-[70%] pl-12">
								<div className="">
									<p className="text-[2rem] font-bold text-white">
										Mom, Dad, what are you waiting for?
									</p>
									<p className="mt-1 text-xl text-white">
										Join us for one month free trial
									</p>
								</div>
								<button className="mt-6 flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
									Start Free Trial
								</button>
							</div> */}
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white pb-16 lg:pt-24" id="testimonials">
				<div className="container mx-auto px-6">
					<p className="mb-6 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-sm font-bold text-transparent lg:mb-8 lg:text-center lg:text-base">
						TESTIMONIAL
					</p>
					<p className="text-xl font-extrabold text-black lg:text-center lg:text-[2rem]">
						What parents say about us
					</p>

					{/* Testimonial Container */}
					<div className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto px-4 py-9 lg:mt-12 lg:px-9">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className="shadow-card-primary box-border h-[326px] w-[250px] flex-shrink-0 rounded-md bg-white px-6 py-6 lg:w-[370px]"
							>
								<div className="flex items-end justify-between">
									<div className="mb-2 flex">
										{[...Array(testimonial.rating)].map((_, index) => (
											<StarsIcon key={index} />
										))}
									</div>
									<QuotesIcon />
								</div>

								<p className="mt-8 font-jakarta_sans text-sm italic leading-8 text-black lg:text-lg">
									{testimonial.text}
								</p>
								<p className="mt-6 font-jakarta_sans text-base font-bold text-black lg:text-xl">
									{testimonial.name}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}
