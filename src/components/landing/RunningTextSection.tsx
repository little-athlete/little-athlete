import React from 'react'
import LogoIcon from '../Icon/IconLogo'

const RunningTextSection = () => {
	return (
		<div className="bg-primary py-3">
			<div className="container mx-auto flex items-center justify-center gap-8 overflow-hidden lg:px-6">
				<div className="whitespace-nowrap text-2xl font-semibold text-black">
					and we are still developing other programs, stay tuned
				</div>
				<LogoIcon />
				<p className="whitespace-nowrap text-2xl font-semibold text-black">
					and we are still developing other programs, stay tuned
				</p>
			</div>
		</div>
	)
}

export default RunningTextSection
