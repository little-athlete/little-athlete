import Image from 'next/image'
import React from 'react'

interface AgesSectionType {
	trainingData: {
		id: number
		imageSrc: string
		altText: string
		title: string
		description: string
	}[]
}

const AgesSection: React.FC<AgesSectionType> = ({ trainingData }) => {
	return (
		<section id="ages" className="bg-secondary py-16">
			<div className="container mx-auto px-4 lg:px-6">
				<div className="flex flex-wrap items-center justify-center lg:flex-nowrap">
					<div className="lg:w-[55%]">
						<p className="mb-11 text-[2rem] font-extrabold leading-10 text-white lg:w-[75%]">
							Designed Exclusively for Fun but Serious
						</p>
						<p className="text-sm lg:w-[65%]">
							We believe in making learning fun! Our unique approach combines serious
							skill development with exciting games and activities, ensuring children
							stay motivated and engaged while mastering new sports.
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
				</div>
			</div>
		</section>
	)
}

export default AgesSection
