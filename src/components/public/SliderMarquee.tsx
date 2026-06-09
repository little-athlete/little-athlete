'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// Alternating tilted/straight pattern (matches Figma slider):
// tilted → straight → tilted → straight → tilted …
// Tilted photos use ~5deg rotation, alternating clockwise/counter-clockwise.
const TILTS = ['-rotate-5', '', 'rotate-5', '']

export function SliderMarquee({ images }: { images: string[] }) {
	if (!images?.length) return null

	return (
		<section className="relative z-10 -mt-14 overflow-hidden py-4 sm:-mt-20 sm:py-6">
			{/* Pass overflow-y-hidden directly to Marquee container */}
			<Marquee
				className="overflow-y-hidden"
				gradient={false}
				speed={40}
				pauseOnHover
				autoFill
			>
				{images.map((src, i) => (
					<div
						key={`${src}-${i}`}
						className={`mx-5 py-4 sm:py-6 ${TILTS[i % TILTS.length]}`}
					>
						<Image
							src={src}
							alt=""
							width={300}
							height={400}
							className="h-72 w-55 rounded-2xl object-cover shadow-lg sm:h-100 sm:w-75"
						/>
					</div>
				))}
			</Marquee>
		</section>
	)
}
