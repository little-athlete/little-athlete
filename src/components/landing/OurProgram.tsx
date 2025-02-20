import { ILandingPage } from '@/db/firestore/interfaces/landing'
import React, { JSX } from 'react'
import BaseballIcon from '@/components/Icon/IconBaseball'
import BasketBallIcon from '@/components/Icon/IconBasketball'
import FootballIcon from '@/components/Icon/IconFootball'
import TennisIcon from '@/components/Icon/IconTenis'
import MaskingImage1Icon from '@/components/Icon/Masking_1'
import MaskingImage2Icon from '@/components/Icon/Masking_2'
import MaskingImage3Icon from '@/components/Icon/Masking_3'
import MaskingImage4Icon from '@/components/Icon/Masking_4'
import Image from 'next/image'

interface ProgramDataType {
	data: ILandingPage
}

const OurProgramSection: React.FC<ProgramDataType> = ({ data }) => {
	const iconMap: Record<string, JSX.Element> = {
		Basketball: <BasketBallIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
		Football: <FootballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
		Baseball: <BaseballIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
		Tennis: <TennisIcon className="h-[32px] w-[32px] lg:h-[63px] lg:w-[63px]" />,
	}

	const reverse: Record<string, boolean> = {
		Basketball: false,
		Football: true,
		Baseball: false,
		Tennis: true,
	}

	const getMaskingComponent = (name: string, imageUrl: string): JSX.Element | null => {
		const maskingComponents: Record<string, JSX.Element> = {
			Basketball: (
				<div className="relative">
					<Image
						width={474}
						height={685}
						alt="image"
						src="/Blob 1.png"
						className="absolute -bottom-1 right-2 h-[90%] w-[90%] lg:bottom-2 lg:right-8 lg:h-[474px] lg:w-[685px]"
					/>
					<MaskingImage1Icon
						src={imageUrl}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
			Football: (
				<div className="relative">
					<Image
						width={515}
						height={689}
						alt="image"
						src="/Blob 2.png"
						className="absolute -bottom-1 right-2 h-[90%] w-[90%] rotate-12 lg:bottom-2 lg:right-8 lg:h-[515px] lg:w-[689px]"
					/>
					<MaskingImage2Icon
						src={imageUrl}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
			Baseball: (
				<div className="relative">
					<Image
						width={500}
						height={669}
						alt="blob"
						src="/Blob 3.png"
						className="absolute right-2 top-0 h-[90%] w-[90%] lg:right-0 lg:top-10 lg:h-[501px] lg:w-[669px]"
					/>
					<MaskingImage3Icon
						src={imageUrl}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
			Tennis: (
				<div className="relative">
					<Image
						width={490}
						height={680}
						alt="blob"
						src="/Blob 4.png"
						className="absolute right-2 top-8 h-[80%] w-[90%] -rotate-3 lg:right-[40px] lg:top-14 lg:h-[490px] lg:w-[680px]"
					/>
					<MaskingImage4Icon
						src={imageUrl}
						className="h-full w-full lg:h-[615px] lg:w-[770px]"
					/>
				</div>
			),
		}

		return maskingComponents[name] || null
	}

	// const maskingMap: Record<string, JSX.Element> = {
	// 	Basketball: (
	// 		<div className="relative">
	// 			<Image
	// 				width={474}
	// 				height={685}
	// 				alt="image"
	// 				src="/Blob 1.png"
	// 				className="absolute -bottom-1 right-2 h-[90%] w-[90%] lg:bottom-2 lg:right-8 lg:h-[474px] lg:w-[685px]"
	// 			/>
	// 			<MaskingImage1Icon
	// 				src="/program_1.png"
	// 				className="h-full w-full lg:h-[615px] lg:w-[770px]"
	// 			/>
	// 		</div>
	// 	),
	// 	Football: (
	// 		<div className="relative">
	// 			<Image
	// 				width={515}
	// 				height={689}
	// 				alt="image"
	// 				src="/Blob 2.png"
	// 				className="absolute -bottom-1 right-2 h-[90%] w-[90%] rotate-12 lg:bottom-2 lg:right-8 lg:h-[515px] lg:w-[689px]"
	// 			/>
	// 			<MaskingImage2Icon
	// 				src="/program_2.png"
	// 				className="h-full w-full lg:h-[615px] lg:w-[770px]"
	// 			/>
	// 		</div>
	// 	),
	// 	Baseball: (
	// 		<div className="relative">
	// 			<Image
	// 				width={500}
	// 				height={669}
	// 				alt="blob"
	// 				src="/Blob 3.png"
	// 				className="absolute right-2 top-0 h-[90%] w-[90%] lg:right-0 lg:top-10 lg:h-[501px] lg:w-[669px]"
	// 			/>
	// 			<MaskingImage3Icon
	// 				src="/program_3.png"
	// 				className="h-full w-full lg:h-[615px] lg:w-[770px]"
	// 			/>
	// 		</div>
	// 	),
	// 	Tennis: (
	// 		<div className="relative">
	// 			<Image
	// 				width={490}
	// 				height={680}
	// 				alt="blob"
	// 				src="/Blob 4.png"
	// 				className="absolute right-2 top-8 h-[80%] w-[90%] -rotate-3 lg:right-[40px] lg:top-14 lg:h-[490px] lg:w-[680px]"
	// 			/>
	// 			<MaskingImage4Icon
	// 				src="/program_4.png"
	// 				className="h-full w-full lg:h-[615px] lg:w-[770px]"
	// 			/>
	// 		</div>
	// 	),
	// }

	const sportData = data?.programs_data?.map((item) => {
		return {
			icon: iconMap[item.name as keyof typeof iconMap] || null,
			name: item.name,
			image_url: item.image_url,
			alt: item.alt_text,
			component: getMaskingComponent(item.name as string, item.image_url as string),
			reverse: reverse[item.name as keyof typeof reverse] || false,
		}
	})

	return (
		<div className="bg-white pb-16 pt-24">
			<div className="container mx-auto px-6">
				<p className="mb-8 bg-gradient-to-r from-[#635AD9] to-[#219BE4] bg-clip-text text-base font-bold text-transparent lg:text-center">
					OUR PROGRAMS
				</p>
				<h2 className="text-[2rem] font-extrabold text-black lg:text-center">
					{data?.programs_title}
				</h2>

				<div className="overflow-hidden lg:overflow-visible">
					{sportData.map((sport, index) => (
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
