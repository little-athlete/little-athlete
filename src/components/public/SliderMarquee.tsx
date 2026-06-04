'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// Alternating tilt so the photo strip looks playful (matches Figma slider).
const TILTS = ['-rotate-3', 'rotate-2', '-rotate-2', 'rotate-3']

export function SliderMarquee({ images }: { images: string[] }) {
	if (!images?.length) return null

	return (
		<section className="overflow-hidden py-10 sm:py-14">
			<Marquee gradient={false} speed={40} pauseOnHover autoFill>
				{images.map((src, i) => (
					<div
						key={`${src}-${i}`}
						className={`mx-3 ${TILTS[i % TILTS.length]}`}
					>
						<Image
							src={src}
							alt=""
							width={320}
							height={224}
							className="h-44 w-64 rounded-2xl object-cover shadow-lg sm:h-52 sm:w-80"
						/>
					</div>
				))}
			</Marquee>
		</section>
	)
}
