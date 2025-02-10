'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IconDirection from '../Icon/IconDirection'
import { ILandingPage } from '@/db/firestore/interfaces/landing'

interface FacilitiesProps {
	data: ILandingPage
}

const FacilitiesSection = ({ data }: FacilitiesProps) => {
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false)

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 900)
		}

		// Set initial screen size
		handleResize()

		// Add event listener for resize
		window.addEventListener('resize', handleResize)

		// Cleanup event listener
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className="bg-white">
			<div className="mx-auto pt-32 lg:container lg:px-4 lg:py-32">
				<div className="w-full items-center justify-items-center lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
					<div className="mb-12 justify-self-end px-4 lg:mb-0 lg:w-[524px] lg:px-0">
						<h3 className="mb-4 text-[32px] font-bold text-black">
							{data?.facility_title}
						</h3>
						<p className="text-base text-gray-002">{data?.facility_desc}</p>
					</div>
					<div data-aos="fade-left" className="justify-self-start">
						<Image
							src={data?.facility_image_url_1}
							alt="facilities"
							width={530}
							height={500}
							className="hidden h-[400px] w-[530px] rounded-2xl lg:block"
						/>
					</div>
					<div data-aos="fade-right" className="justify-self-end">
						<Image
							src={data?.facility_image_url_2}
							alt="facilities"
							width={500}
							height={500}
							className="hidden h-[400px] w-[530px] rounded-2xl lg:block"
						/>
					</div>
					<div className="justify-self-start lg:w-[85%]">
						<div
							style={
								!isLargeScreen && data?.facility_image_url_1
									? { backgroundImage: `url(${data?.facility_image_url_1})` }
									: {}
							}
							className="relative flex h-[300px] flex-col justify-end rounded-none bg-cover bg-no-repeat px-4 pb-4 lg:block lg:h-auto lg:bg-none lg:px-0 lg:pb-0"
						>
							<div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
							<div className="relative z-10">
								<h3 className="mb-4 text-2xl font-extrabold text-white lg:text-black">
									{data?.locations[0]?.title}
								</h3>
								<p className="mb-4 text-sm text-white lg:text-base lg:text-gray-002">
									{data?.locations[0]?.address}
								</p>
								<button
									onClick={() =>
										window.open(
											data?.locations[0]?.link,
											'_blank',
											'noopener,noreferrer'
										)
									}
									className="flex items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-sm font-bold text-black lg:text-base"
								>
									<IconDirection className="h-[16px] w-[16px] lg:h-[25px] lg:w-[25px]" />{' '}
									{data?.locations[0]?.link_title}
								</button>
							</div>
						</div>

						<div
							style={
								!isLargeScreen
									? { backgroundImage: `url(${data?.facility_image_url_2})` }
									: {}
							}
							className="relative flex h-[300px] flex-col justify-end rounded-none bg-cover bg-no-repeat px-4 pb-4 lg:mt-8 lg:block lg:h-auto lg:bg-none lg:px-0 lg:pb-0"
						>
							<div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
							<div className="relative z-10">
								<h3 className="mb-4 text-2xl font-extrabold text-white lg:text-black">
									{data?.locations[1]?.title}
								</h3>
								<p className="mb-4 text-sm text-white lg:text-base lg:text-gray-002">
									{data?.locations[1]?.address}
								</p>
								<button
									onClick={() =>
										window.open(
											data?.locations[1]?.link,
											'_blank',
											'noopener,noreferrer'
										)
									}
									className="flex items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-sm font-bold text-black lg:text-base"
								>
									<IconDirection className="h-[16px] w-[16px] lg:h-[25px] lg:w-[25px]" />{' '}
									{data?.locations[0]?.link_title}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FacilitiesSection
