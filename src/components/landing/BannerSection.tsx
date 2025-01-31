import React from 'react'
import WhastappIcon from '../Icon/IconWa'

const BannerSection = () => {
	return (
		<div className="bg-primary py-3">
			<div className="container mx-auto flex flex-wrap items-center justify-center gap-4 px-6 lg:gap-8">
				<p className="text-base font-semibold text-black lg:text-2xl">
					Curious about our programs?
				</p>
				<button className="flex items-center rounded-full border-2 border-border bg-white px-4 py-1 text-base font-semibold text-black lg:px-6 lg:py-2">
					<WhastappIcon className="mt-[1px] h-[16px] w-[16px] lg:h-[32px] lg:w-[32px]" />
					<span className="text-sm lg:text-base xl:ml-2">Chat with us</span>
				</button>
			</div>
		</div>
	)
}

export default BannerSection
