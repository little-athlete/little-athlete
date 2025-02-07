'use client'

import Image from 'next/image'

interface CoachingData {
	country: string
	imageSrc: string
	altText: string
	description: string
}

interface AboutSectionProps {
	coachingData: CoachingData[]
}

const AboutSection: React.FC<AboutSectionProps> = ({ coachingData }) => {
	return (
		<div className="bg-secondary py-12 text-white lg:py-16">
			<div className="container mx-auto px-6">
				<p className="mb-8 font-jakarta_sans text-sm font-bold text-white lg:mb-12 lg:text-center lg:text-base">
					ABOUT US
				</p>
				<h2 className="mb-12 text-2xl font-bold text-white lg:text-center lg:text-[42px]">
					Our Passion, Your Advantage
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-20">
					<div className="w-full lg:w-[524px]">
						<h3 className="mb-10 text-[2rem] font-extrabold">
							Internationally Certified Coaches
						</h3>
						<p className="mb-9 text-base lg:mb-14">
							We believe in providing the best for our young learners. Our
							internationally certified coaches bring a wealth of knowledge and
							experience to every session, creating a supportive and enriching
							environment for children to thrive.
						</p>

						<ul className="space-y-4 overflow-hidden lg:overflow-visible">
							{coachingData.map((item, index) => (
								<li
									data-aos="fade-up-right"
									data-aos-delay={index * 200}
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

					<div className="-mb-24 flex gap-4 overflow-hidden lg:-mb-16 lg:w-[38%] lg:gap-10 lg:overflow-visible">
						<div>
							<div
								className="rounded-2xl"
								data-aos="fade-down-right"
								data-aos-delay={600}
							>
								<img
									src="/people.png"
									alt="Coach 1"
									className="mb-4 w-[248px] rounded-2xl"
								/>
							</div>
							<div
								className="rounded-2xl"
								data-aos="fade-up-right"
								data-aos-delay={600}
							>
								<img
									src="/people2.png"
									alt="Coach 2"
									className="w-[248px] rounded-2xl"
								/>
							</div>
						</div>
						<div className="block rounded-md lg:-mb-8">
							<div
								className="rounded-2xl"
								data-aos="fade-down-left"
								data-aos-delay={600}
							>
								<img
									src="/people3.png"
									alt="Coach 3"
									className="mt-20 w-[248px] rounded-2xl lg:mt-28"
								/>
							</div>
							<div
								className="rounded-2xl"
								data-aos="fade-up-left"
								data-aos-delay={600}
							>
								<img
									src="/people4.png"
									alt="Coach 4"
									className="mt-4 w-[248px] rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
