import Image from 'next/image'
import React from 'react'

interface ProgramDataType {
	sportsData: {
		icon: React.ReactNode
		name: string
		imageSrc: string
		alt: string
		reverse?: boolean
	}[]
}

const OurProgramSection: React.FC<ProgramDataType> = ({ sportsData }) => {
	return (
		<section id="programs" className="bg-white pb-16 pt-24">
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
								<div className="mt-12 flex justify-center">{sport.icon}</div>
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
	)
}

export default OurProgramSection
