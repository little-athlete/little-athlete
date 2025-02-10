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
		<div className="bg-secondary py-16">
			<div className="mx-auto px-4 lg:px-6">
				<div className="grid-cols-2 items-center justify-center gap-4 lg:grid lg:flex-nowrap">
					<div className="justify-self-end lg:max-w-[580px]">
						<p className="mb-11 text-[2rem] font-extrabold leading-10 text-white lg:w-[75%]">
							Designed Exclusively for Fun but Serious
						</p>
						<p className="text-sm text-white lg:w-[65%]">
							We believe in making learning fun! Our unique approach combines serious
							skill development with exciting games and activities, ensuring children
							stay motivated and engaged while mastering new sports.
						</p>
					</div>

					<div className="mt-4 grid w-full grid-cols-2 gap-5 overflow-hidden lg:mt-0 lg:flex lg:w-auto lg:gap-6 lg:overflow-visible">
						{trainingData.map((item, i) => (
							<div
								// data-aos={i % 2 !== 0 ? 'fade-down-left' : 'fade-down-right'} // Bergantian setiap card
								// data-aos-delay={i * 200} // Animasi satu per satu
								key={item.id}
								className={`back box-border flex w-full items-center justify-center rounded-2xl bg-card-001 px-1 py-7 lg:h-[250px] lg:w-[200px] ${
									i === 1 ? 'relative top-36 lg:top-0' : ''
								}`}
							>
								<div className="">
									<div className="mb-4 flex items-center justify-center lg:mb-6">
										<Image
											src={item.imageSrc}
											width={125}
											height={125}
											alt={item.altText}
											className="h-[100px] w-[100px] lg:h-[125px] lg:w-[125px]"
										/>
									</div>
									<p className="text-center text-sm font-bold text-white lg:text-lg">
										{item.title}
									</p>
									<p className="text-center text-sm text-white lg:text-lg">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default AgesSection

// import Image from 'next/image'
// import React from 'react'

// interface AgesSectionType {
// 	trainingData: {
// 		id: number
// 		imageSrc: string
// 		altText: string
// 		title: string
// 		description: string
// 		rotation: string
// 		position: string
// 		opacity?: string
// 	}[]
// }

// const AgesSection: React.FC<AgesSectionType> = ({ trainingData }) => {
// 	return (
// 		<div className="bg-secondary py-12">
// 			<div className="mx-auto px-4 lg:px-6">
// 				<div className="grid-cols-2 items-center justify-center gap-4 lg:grid lg:flex-nowrap">
// 					<div className="justify-self-end lg:max-w-[580px]">
// 						<p className="mb-11 text-[2rem] font-extrabold leading-10 text-white lg:w-[75%]">
// 							Designed Exclusively for Fun but Serious
// 						</p>
// 						<p className="text-sm text-white lg:w-[65%]">
// 							We believe in making learning fun! Our unique approach combines serious
// 							skill development with exciting games and activities, ensuring children
// 							stay motivated and engaged while mastering new sports.
// 						</p>
// 					</div>

// 					<div className="mt-4 w-full gap-5 overflow-hidden pb-36 lg:mt-0 lg:gap-6 lg:overflow-visible">
// 						<div className="relative flex w-fit">
// 							{trainingData.map((item, i) => (
// 								<div
// 									// data-aos={i % 2 !== 0 ? 'fade-down-left' : 'fade-down-right'} // Bergantian setiap card
// 									// data-aos-delay={i * 200} // Animasi satu per satu
// 									key={item.id}
// 									className={`${item.position} ${item.rotation} box-border flex w-full items-center justify-center rounded-2xl bg-card-001 px-3 py-7 lg:h-[300px] lg:w-[250px]`}
// 								>
// 									{/* <div
// 										className={`absolute inset-0 rounded-2xl bg-card-001 ${item.opacity}`}
// 									/> */}
// 									<div className="">
// 										<div className="mb-4 flex items-center justify-center lg:mb-6">
// 											<Image
// 												src={item.imageSrc}
// 												width={150}
// 												height={150}
// 												alt={item.altText}
// 												className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]"
// 											/>
// 										</div>
// 										<p className="text-center text-sm font-bold lg:text-lg">
// 											{item.title}
// 										</p>
// 										<p className="text-center text-sm lg:text-lg">
// 											{item.description}
// 										</p>
// 									</div>
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default AgesSection
