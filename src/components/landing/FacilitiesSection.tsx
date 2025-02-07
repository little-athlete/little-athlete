import Image from 'next/image'
import React from 'react'
import IconDirection from '../Icon/IconDirection'

const FacilitiesSection = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto pt-32 lg:container lg:px-4 lg:py-32">
				<div className="w-full items-center justify-items-center lg:grid lg:grid-cols-2 lg:gap-16 lg:px-16">
					<div className="mb-12 justify-self-end px-4 lg:mb-0 lg:w-[524px] lg:px-0">
						<h3 className="mb-4 text-[32px] font-bold text-black">
							Private Facilities{' '}
						</h3>
						<p className="text-base text-gray-002">
							2 locations in the JABODETABEK with our own courts, so your kids can
							enjoy a comfortable and professional experience
						</p>
					</div>
					<div data-aos="fade-left" className="justify-self-start">
						<Image
							src={'/gor_1.png'}
							alt="facilities"
							width={530}
							height={500}
							className="hidden h-[400px] w-[530px] rounded-2xl lg:block"
						/>
					</div>
					<div data-aos="fade-right" className="justify-self-end">
						<Image
							src={'/gor_2.png'}
							alt="facilities"
							width={500}
							height={500}
							className="hidden h-[400px] w-[530px] rounded-2xl lg:block"
						/>
					</div>
					<div className="w-[85%] justify-self-start">
						<div className="relative flex h-[300px] flex-col justify-end rounded-none bg-[url('/gor_1.png')] bg-cover bg-no-repeat px-4 pb-4 lg:block lg:h-auto lg:bg-none lg:px-0 lg:pb-0">
							<div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
							<div className="relative z-10">
								<h3 className="mb-4 text-2xl font-extrabold text-white lg:text-black">
									Jakarta Barat
								</h3>
								<p className="mb-4 text-sm text-white lg:text-base lg:text-gray-002">
									Jl. Taman Surya 5 Jl. Taman Anyelir 2 No.RT.10 Blok EE no 2,
									RT.2/ RW.17, Pegadungan, Kalideres, West Jakarta City, Jakarta
									11830
								</p>
								<button className="flex items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-sm font-bold text-black lg:text-base">
									<IconDirection className="h-[16px] w-[16px] lg:h-[25px] lg:w-[25px]" />{' '}
									Get Direction
								</button>
							</div>
						</div>

						<div className="relative flex h-[300px] flex-col justify-end rounded-none bg-[url('/gor_2.png')] bg-cover bg-no-repeat px-4 pb-4 lg:mt-8 lg:block lg:h-auto lg:bg-none lg:px-0 lg:pb-0">
							<div className="absolute inset-0 bg-black opacity-50 lg:hidden"></div>
							<div className="relative z-10">
								<h3 className="mb-4 text-2xl font-extrabold text-white lg:text-black">
									BSD
								</h3>
								<p className="mb-4 text-sm text-white lg:text-base lg:text-gray-002">
									Mall Teras Kota - CBD Lot VII B, Jl. Pahlawan Seribu, Lengkong
									Gudang, Serpong, Kota, Kota Tangerang Selatan, Banten 15322
								</p>
								<button className="flex items-center gap-3 rounded-full border-2 border-slate-300 bg-white px-6 py-2 text-sm font-bold text-black lg:text-base">
									<IconDirection className="h-[16px] w-[16px] lg:h-[25px] lg:w-[25px]" />{' '}
									Get Direction
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
