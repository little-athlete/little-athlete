import { ILandingPage } from '@/db/firestore/interfaces/landing'
import Image from 'next/image'
import React from 'react'

interface SemiSectionType {
	data: ILandingPage
}

const SemiPrivateSection = ({ data }: SemiSectionType) => {
	return (
		<div className="bg-white">
			<div className="mx-auto">
				<div className="flex w-full flex-wrap lg:flex-nowrap">
					<div className="order-2 bg-white lg:order-1 lg:min-w-[700px]">
						<Image
							src={data?.semi_private_image_url}
							alt="Class"
							className="h-full w-[700px] object-fill lg:mr-20 lg:h-[600px]"
							width={700}
							height={600}
						/>
					</div>
					<div className="order-1 flex w-full items-center justify-center px-4 pb-14 pt-20 lg:order-2 lg:max-w-[600px] lg:pt-0">
						<div>
							<h3 className="mx-auto mb-4 text-[32px] font-bold text-black lg:w-3/4">
								{data?.semi_private_title}
							</h3>
							<p className="mx-auto text-base text-gray-002 lg:w-3/4">
								{data?.semi_private_desc}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SemiPrivateSection
