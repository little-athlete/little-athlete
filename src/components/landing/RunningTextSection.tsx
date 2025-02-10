import React from 'react'
import LogoIcon from '../Icon/IconLogo'
import Marquee from 'react-fast-marquee'
import { ILandingPage } from '@/db/firestore/interfaces/landing'

interface Props {
	data: ILandingPage
}
const RunningTextSection = ({ data }: Props) => {
	console.log(data)
	return (
		<div className="bg-primary py-3">
			<Marquee>
				<div className="mx-auto flex items-center justify-center gap-8 overflow-hidden lg:px-6">
					<p className="text-2xl font-semibold text-black lg:text-xl">
						and we are still developing other programs, stay tuned
					</p>
					<div>
						<LogoIcon />
					</div>
					<p className="mr-2 text-2xl font-semibold text-black lg:mr-2 lg:text-xl">
						and we are still developing other programs, stay tuned
					</p>
					<LogoIcon className="mr-4" />
				</div>
			</Marquee>
		</div>
	)
}

export default RunningTextSection
