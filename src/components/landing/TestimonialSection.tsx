import React from 'react'
import { StarsIcon } from '../Icon/IconStart'
import { QuotesIcon } from '../Icon/IconQuotes'

type TestimonialPropsType = {
	testimonials: {
		id: number
		name: string
		text: string
		rating: number
	}[]
}

const TestimonialSection: React.FC<TestimonialPropsType> = ({ testimonials }) => {
	return (
		<section className="bg-white pb-16 lg:pt-16" id="testimonials">
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
	)
}

export default TestimonialSection
