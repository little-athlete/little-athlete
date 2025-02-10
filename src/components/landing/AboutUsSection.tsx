'use client'

import { ILandingPage } from '@/db/firestore/interfaces/landing'
import Image from 'next/image'

interface CoachingData {
	country: string
	imageSrc: string
	altText: string
	description: string
}

interface AboutSectionProps {
	coachingData: CoachingData[]
	data: ILandingPage
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
	return (
		<div className="bg-secondary py-12 text-white lg:py-16">
			<div className="container mx-auto px-6">
				<p className="mb-8 font-jakarta_sans text-sm font-bold text-white lg:mb-12 lg:text-center lg:text-base">
					ABOUT US
				</p>
				<h2 className="mb-12 text-2xl font-bold text-white lg:text-center lg:text-[42px]">
					{data?.about_title}
				</h2>

				<div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
					<div className="w-full lg:w-[524px]">
						<h3 className="mb-8 text-[2rem] font-extrabold">{data?.about_subtitle}</h3>
						<p className="mb-4 text-base lg:mb-14">{data?.about_desc}</p>

						<ul className="space-y-4 overflow-hidden lg:overflow-visible">
							{data?.about_data.map((item, index) => (
								<li
									data-aos="fade-up-right"
									data-aos-delay={index * 200}
									key={index}
									className={`flex w-full items-center gap-8 rounded-2xl bg-card-001 px-6 py-4 lg:w-[427px]`}
								>
									<Image
										src={item.image_url as string}
										width={48}
										height={48}
										alt={item.alt_text as string}
										className="h-[30px] w-[30px] lg:h-[48px] lg:w-[48px]"
									/>
									<div>
										<p className="text-sm font-bold lg:text-lg">
											{item.country}
										</p>
										<p className="text-sm lg:text-lg">{item.desc}</p>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="-mb-32 flex gap-4 overflow-hidden lg:-mb-32 lg:w-[38%] lg:gap-10 lg:overflow-visible">
						<div>
							<div
								className="rounded-2xl"
								data-aos="fade-down-right"
								data-aos-delay={600}
							>
								<Image
									src={data?.about_coach_images[0]}
									alt="Coach 1"
									className="mb-4 w-[250px] rounded-2xl object-cover lg:h-[285px]"
									width={250}
									height={285}
								/>
							</div>
							<div
								className="rounded-2xl"
								data-aos="fade-up-right"
								data-aos-delay={600}
							>
								<Image
									src={data?.about_coach_images[1]}
									alt="Coach 2"
									className="w-[250px] rounded-2xl object-cover lg:h-[285px]"
									width={250}
									height={285}
								/>
							</div>
						</div>
						<div className="block rounded-md lg:-mb-8">
							<div
								className="rounded-2xl"
								data-aos="fade-down-left"
								data-aos-delay={600}
							>
								<Image
									src={data?.about_coach_images[2]}
									alt="Coach 3"
									className="mt-16 w-[250px] rounded-2xl object-cover lg:mt-28 lg:h-[285px]"
									width={250}
									height={285}
								/>
							</div>
							<div
								className="rounded-2xl"
								data-aos="fade-up-left"
								data-aos-delay={600}
							>
								<Image
									src={data?.about_coach_images[3]}
									alt="Coach 4"
									className="mt-4 w-[250px] rounded-2xl object-cover lg:h-[285px]"
									width={250}
									height={285}
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
