import React from 'react'

interface ProgramDataType {
	sportsData: {
		icon: React.ReactNode
		name: string
		imageSrc: string
		alt: string
		reverse?: boolean
		component: React.ReactNode
	}[]
}

const OurProgramSection: React.FC<ProgramDataType> = ({ sportsData }) => {
	return (
		<div className="bg-white pb-16 pt-24">
			<div className="container mx-auto px-6">
				<p className="mb-8 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-base font-bold text-transparent lg:text-center">
					OUR PROGRAMS
				</p>
				<p className="text-[2rem] font-extrabold text-black lg:text-center">
					Designed for Fun but Serious
				</p>

				<div className="overflow-hidden lg:overflow-visible">
					{sportsData.map((sport, index) => (
						<div
							key={index}
							className={`mt-8 flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:gap-12 ${
								sport.reverse ? 'lg:flex-row-reverse' : ''
							}`}
						>
							<div data-aos="fade-right" data-aos-delay={index * 200}>
								<div className="mt-12 flex justify-center">{sport.icon}</div>
								<p className="mt-2 text-[2rem] font-extrabold text-c-blue-200 lg:mt-4 lg:text-4xl">
									{sport.name}
								</p>
							</div>
							<div data-aos="fade-left" data-aos-delay={index * 300}>
								<div>{sport.component}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurProgramSection
