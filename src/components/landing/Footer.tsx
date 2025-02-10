'use client'
import React from 'react'
import IconInstagram from '../Icon/IconInstagram'
import { ILandingPage } from '@/db/firestore/interfaces/landing'

type Props = {
	data: ILandingPage
}

function Footer({ data }: Props) {
	return (
		<footer
			onClick={() =>
				window.open(data?.social_media_data[0]?.url, '_blank', 'noopener,noreferrer')
			}
			className="fixed bottom-0 z-20 flex w-full items-center justify-center gap-3 border-t border-t-slate-300 bg-white py-5 lg:gap-4"
		>
			<p className="text-sm text-gray-500 lg:text-base">Follow Us on Instagram</p>
			<IconInstagram className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
		</footer>
	)
}

export default Footer
