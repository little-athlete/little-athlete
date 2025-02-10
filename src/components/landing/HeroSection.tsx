'use client'

import { ILandingPage } from '@/db/firestore/interfaces/landing'

type HeroProps = {
	data: ILandingPage
}

const HeroSection = ({ data }: HeroProps) => {
	console.log({ data })
	return (
		<section id="hero" className="relative mt-20 min-h-full bg-white">
			<div
				className={`flex h-[430px] w-full items-center bg-contain bg-no-repeat lg:h-[600px]`}
				style={{ backgroundImage: `url(${data?.hero_image_url})` }}
			>
				<div className="bg-linear-primary relative h-full w-full">
					<div className="absolute bottom-[5%] px-4 lg:bottom-[15%] lg:left-[45%] lg:w-[500px] lg:px-2">
						<h1 className="text-2xl font-bold text-white lg:text-5xl lg:leading-[60px]">
							{data?.hero_title}
						</h1>
						<p className="mt-2 text-base text-white lg:mt-4 lg:text-xl">
							{data?.hero_desc}
						</p>
						<button className="mt-4 flex w-[167px] items-center justify-center rounded-full border-2 border-border bg-white py-2 text-xs font-semibold text-black lg:mt-6 lg:w-[184px] lg:px-6 lg:py-3 lg:text-base">
							{data?.hero_button_title}
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
