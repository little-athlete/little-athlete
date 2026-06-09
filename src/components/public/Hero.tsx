import Image from 'next/image'
import Link from 'next/link'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

// 7 concentric decorative rings — radius & stroke-width grow by 1.2× each,
// mirroring the Figma "Group 2276" backdrop. Inline SVG, no asset dependency.
const RINGS = Array.from({ length: 7 }, (_, i) => ({
	r: 179.5 * 1.2 ** i,
	strokeWidth: 1.2 ** i,
}))

export function Hero({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-background relative overflow-hidden">
			{/* Concentric rings centred behind the characters */}
			<svg
				aria-hidden
				viewBox="0 0 1075 1075"
				className="pointer-events-none absolute top-[52%] left-1/2 aspect-square h-[94%] max-h-225 w-auto -translate-x-1/2 -translate-y-1/2"
			>
				<g filter="url(#ring-inner-shadow)">
					{RINGS.map(({ r, strokeWidth }) => (
						<circle
							key={r}
							cx="537.5"
							cy="537.5"
							r={r}
							fill="none"
							stroke="#D9D9D9"
							strokeWidth={strokeWidth}
						/>
					))}
				</g>
				<defs>
					<filter
						id="ring-inner-shadow"
						x="0"
						y="0"
						width="1074.95"
						height="1078.95"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
						/>
						<feBlend in2="shape" result="effect1_innerShadow" />
					</filter>
				</defs>
			</svg>

			<div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-20 text-center sm:pt-20 sm:pb-28">
				<h1 className="text-primary mx-auto max-w-3xl text-3xl leading-tight font-bold sm:text-4xl md:text-[52px]">
					{data.hero_title}{' '}
					<span className="text-brand-accent block">{data.hero_title_accent}</span>
				</h1>

				<Link
					href={data.hero_button_url || '#'}
					className="bg-primary text-primary-foreground hover:bg-primary/90 mt-6 inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
				>
					{data.hero_button_label}
				</Link>

				{data.hero_image_url && (
					<Image
						src={data.hero_image_url}
						alt="Little Athlete kids playing sports and music"
						width={1000}
						height={620}
						priority
						className="relative mt-2 h-auto w-full max-w-3xl object-contain"
					/>
				)}
			</div>
		</section>
	)
}
