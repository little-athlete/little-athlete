import React from 'react'
import LogoIcon from '../Icon/IconLogo'
import Marquee from 'react-fast-marquee'

const RunningTextSection = () => {
	return (
		<div className="bg-primary py-3">
			<Marquee>
				<div className="container mx-auto flex items-center justify-center gap-8 overflow-hidden lg:px-6">
					<LogoIcon className="ml-8" />
					<p className="text-2xl font-semibold text-black">
						and we are still developing other programs, stay tuned
					</p>
				</div>
			</Marquee>
		</div>
	)
}

export default RunningTextSection
