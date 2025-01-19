import { AmericanFlag } from '@/components/Icon/IconAmericanFlag'
import { Baseball } from '@/components/Icon/IconBaseball'
import { BasketBall } from '@/components/Icon/IconBasketball'
import { FootballIcon } from '@/components/Icon/IconFootball'
import { QuotesIcon } from '@/components/Icon/IconQuotes'
import { StarsIcon } from '@/components/Icon/IconStart'
import { TenisIcon } from '@/components/Icon/IconTenis'
import IconWhatsApp from '@/components/Icon/IconWa'
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
	return (
		<main>
			{/* Header */}
			<header className="fixed left-0 top-0 z-50 w-full bg-primary shadow-md">
				<div className="container mx-auto flex items-center justify-between px-6">
					<div className="logo">
						<Image src="/logo.png" alt="Logo" width={89} height={89} />
					</div>
					<nav className="hidden space-x-14 md:flex">
						<a
							href="#credibility"
							className="text font-medium text-black hover:text-blue-700"
						>
							Our Credibility
						</a>
						<a
							href="#about"
							className="text font-medium text-black hover:text-blue-700"
						>
							About Us
						</a>
						<a
							href="#programs"
							className="text font-medium text-black hover:text-blue-700"
						>
							Programs
						</a>
						<a
							href="#testimonials"
							className="text font-medium text-black hover:text-blue-700"
						>
							Testimonials
						</a>
					</nav>
					<button className="flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
						<IconWhatsApp />
						<span className="ml-2">Chat with us</span>
					</button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-linear-primary relative mt-20">
				<div className="flex h-[600px] items-center justify-end bg-[url('/hero.png')] bg-contain bg-no-repeat">
					{/* Konten lainnya */}
					<div className="bg-[linear-gradient(90deg, rgba(3, 102, 255, 0) 10.05%, #0366FF 44.95%)] flex h-full w-[55%] items-center">
						<div className="w-[70%]">
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
			</section>

			{/* Credibility Section */}
			<section id="credibility" className="bg-yellow-400 py-16 md:py-24">
				<div className="container mx-auto px-6 text-center">
					<h2 className="mb-4 text-[2.625rem] font-bold text-black">Our Credibility</h2>
					<p className="mb-12 text-base text-black">
						For almost 2 years, we have grown so fast, delivering high-quality programs
						for future athletes and satisfied parents.
					</p>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5">
						{dataC.map((el, i) => (
							<div
								key={i}
								className="rounded-2xl bg-secondary p-6 text-center text-white shadow-md transition duration-300 hover:scale-105"
							>
								{' '}
								{/* Styling card */}
								<p className="mb-2 text-5xl font-bold">{el.value}</p>{' '}
								{/* Margin bottom untuk spasi */}
								<p className="mt-6 text-base">{el.label}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="bg-secondary py-16 text-white">
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
			</section>

			{/* Semi-Private Section */}
			<section className="bg-white">
				<div className="mx-auto">
					<div className="flex w-full">
						<div className="w-full bg-secondary">
							<Image
								src="/class-people.png"
								alt="Class"
								className="h-full w-full"
								width={700}
								height={600}
							/>
						</div>
						<div className="mx-auto flex items-center justify-center">
							<div>
								<h3 className="mb-4 text-center text-[32px] font-bold text-black">
									Semi-Private Multi Sport Class
								</h3>
								<p className="mx-auto w-3/4 text-center text-base text-gray-002">
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
				<div className="container mx-auto px-6">
					<div className="flex items-center justify-center">
						<div className="w-[55%]">
							<p className="mb-11 w-[75%] text-[2rem] font-extrabold leading-10 text-white">
								Designed Exclusively for Fun but Serious
							</p>
							<p className="w-[65%] text-sm">
								We believe in making learning fun! Our unique approach combines
								serious skill development with exciting games and activities,
								ensuring children stay motivated and engaged while mastering new
								sports.
							</p>
						</div>
						<div className="flex gap-6">
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
						</div>
					</div>
				</div>
			</section>

			{/* BAnner */}

			<section className="bg-primary py-3">
				<div className="container mx-auto flex items-center justify-center gap-8 px-6">
					<p className="text-2xl font-semibold text-black">Curious about our programs?</p>
					<button className="flex items-center rounded-full border-2 border-border bg-white px-6 py-2 text-base font-semibold text-black">
						<IconWhatsApp />
						<span className="ml-2">Chat with us</span>
					</button>
				</div>
			</section>

			<section className="bg-white pb-16 pt-24">
				<div className="container mx-auto px-6">
					<p className="mb-8 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-center text-base font-bold text-transparent">
						OUR PROGRAMS
					</p>
					<p className="text-center text-[2rem] font-extrabold text-black">
						Designed for Fun but Serious
					</p>
					<div>
						<div className="flex items-center justify-center gap-12">
							<div>
								<BasketBall />
								<p className="text-c-blue-200 mt-4 text-4xl font-extrabold">
									Basketball
								</p>
							</div>
							<Image src={'/program.png'} width={700} height={600} alt="2" />
						</div>
						<div className="flex items-center justify-center gap-24">
							<div className="order-last">
								<FootballIcon />
								<p className="text-c-blue-200 mt-4 text-4xl font-extrabold">
									Football
								</p>
							</div>
							<div className="">
								<Image src={'/img_football.png'} width={700} height={600} alt="2" />
							</div>
						</div>
						<div className="flex items-center justify-center gap-12">
							<div>
								<Baseball />
								<p className="text-c-blue-200 mt-4 text-4xl font-extrabold">
									Baseball
								</p>
							</div>
							<Image src={'/img_baseball.png'} width={700} height={600} alt="2" />
						</div>
						<div className="flex items-center justify-center gap-24">
							<div className="order-last">
								<TenisIcon />
								<p className="text-c-blue-200 mt-4 text-4xl font-extrabold">
									Tennis
								</p>
							</div>
							<div className="">
								<Image src={'/img_tennis.png'} width={700} height={600} alt="2" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-primary py-3">
				<div className="container mx-auto flex items-center justify-center gap-8 px-6">
					<p className="text-2xl font-semibold text-black">
						and we are still developing other programs, stay tuned
					</p>
				</div>
			</section>

			<section className="bg-white pb-16 pt-24">
				<div className="container mx-auto px-6">
					<div className="grid w-full place-items-center">
						<div className="flex h-[237px] w-[1141px] rounded-[10px] bg-secondary">
							<div className="my-12 w-[70%] pl-12">
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
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-white pb-16 pt-24">
				<div className="container mx-auto px-6">
					<p className="mb-8 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-center text-base font-bold text-transparent">
						TESTIMONIAL
					</p>
					<p className="text-center text-[2rem] font-extrabold text-black">
						What parents says about us
					</p>
					<div className="mt-12 flex justify-end gap-4">
						<div className="shadow-card-primary box-border h-[326px] w-[370px] rounded-md bg-white px-6 py-6">
							<div className="flex items-end justify-between">
								<div className="mb-2 flex">
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
								</div>
								<QuotesIcon />
							</div>

							<p className="mt-8 font-jakarta_sans text-lg italic leading-8 text-black">
								when an unknown printer took away galley of type aawer awtnd there
								are scrambled it to make a type many but also the leap into{' '}
							</p>
							<p className="mt-6 font-jakarta_sans text-xl text-black">
								Jessica Miyako
							</p>
						</div>
						<div className="shadow-card-primary box-border h-[326px] w-[370px] rounded-md bg-white px-6 py-6">
							<div className="flex items-end justify-between">
								<div className="mb-2 flex">
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
								</div>
								<QuotesIcon />
							</div>

							<p className="mt-8 font-jakarta_sans text-lg italic leading-8 text-black">
								when an unknown printer took away galley of type aawer awtnd there
								are scrambled it to make a type many but also the leap into{' '}
							</p>
							<p className="mt-6 font-jakarta_sans text-xl text-black">
								Darren Kosasih{' '}
							</p>
						</div>
						<div className="shadow-card-primary box-border h-[326px] w-[370px] rounded-md bg-white px-6 py-6">
							<div className="flex items-end justify-between">
								<div className="mb-2 flex">
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
									<StarsIcon />
								</div>
								<QuotesIcon />
							</div>

							<p className="mt-8 font-jakarta_sans text-lg italic leading-8 text-black">
								when an unknown printer took away galley of type aawer awtnd there
								are scrambled it to make a type many but also the leap into{' '}
							</p>
							<p className="mt-6 font-jakarta_sans text-xl text-black">
								Vincent Rompies
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
