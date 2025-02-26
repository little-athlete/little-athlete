'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { StarsIcon } from '../Icon/IconStart'
import { QuotesIcon } from '../Icon/IconQuotes'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ILandingPage } from '@/db/firestore/interfaces/landing'

type TestimonialPropsType = {
	data: ILandingPage
}

const TestimonialSection: React.FC<TestimonialPropsType> = ({ data }) => {
	const [sliderRef, instanceRef] = useKeenSlider({
		loop: true,
		slides: { perView: 4, spacing: 15 },
	})
	return (
		<section className="bg-white pb-32 lg:pt-16" id={data?.sections[3]?.key?.replace('#', '')}>
			<div className="mx-auto px-6">
				<p className="mb-6 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-sm font-bold text-transparent lg:mb-8 lg:text-center lg:text-base">
					TESTIMONIAL
				</p>
				<p className="text-xl font-extrabold text-black lg:text-center lg:text-[2rem]">
					{data?.testimony_title}
				</p>
				<div className="mx-auto max-w-7xl">
					<div className="hidden lg:block">
						<div ref={sliderRef} className="keen-slider mt-8 hidden pb-12 lg:mt-12">
							{data?.testimony_data?.map((testimonial, i) => (
								<div
									key={i}
									className="keen-slider__slide flex h-[326px] w-[250px] flex-shrink-0 flex-col items-center rounded-md bg-white p-6 px-6 py-6 shadow-lg lg:w-[370px]"
								>
									<div className="flex w-full items-end justify-between">
										<div className="flex">
											{[...Array(testimonial.star)].map((_, index) => (
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

					{/* MOBILE VERSION */}
					<div className="scrollbar-hide mt-8 flex gap-4 overflow-x-auto px-4 py-9 lg:mt-12 lg:hidden lg:px-9">
						{data?.testimony_data?.map((testimonial, i) => (
							<div
								key={i}
								className="shadow-card-primary box-border h-[326px] w-[250px] flex-shrink-0 rounded-md bg-white px-6 py-6 lg:w-[370px]"
							>
								<div className="flex items-end justify-between">
									<div className="mb-2 flex">
										{[...Array(testimonial.star)].map((_, index) => (
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

					{/* Navigation Buttons */}
					{/* REMOVE ON MOBILE VERSION */}
					<div className="mt-6 hidden justify-center gap-4 lg:flex">
						<div
							onClick={() => instanceRef.current?.prev()}
							className="cursor-pointer rounded-full border-2 border-secondary p-2 transition"
						>
							<ChevronLeft size={16} className="text-secondary" />
						</div>
						<div
							onClick={() => instanceRef.current?.next()}
							className="cursor-pointer rounded-full border-2 border-secondary p-2 transition"
						>
							<ChevronRight size={16} className="text-secondary" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TestimonialSection
