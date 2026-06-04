import Image from 'next/image'
import Link from 'next/link'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

// Concentric decorative rings (pure CSS — no asset dependency).
const RING_SIZES = [720, 560, 400]

export function Hero({ data }: { data: ILandingPage }) {
	return (
		<section className="relative overflow-hidden bg-background">
			{/* Concentric rings centred behind the characters */}
			<div
				aria-hidden
				className="pointer-events-none absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				{RING_SIZES.map((size) => (
					<div
						key={size}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
						style={{ width: size, height: size }}
					/>
				))}
			</div>

			<div className="relative mx-auto flex max-w-screen-xl flex-col items-center px-6 pt-16 text-center sm:pt-20">
				<h1 className="mx-auto max-w-2xl text-3xl leading-tight font-bold text-foreground sm:text-4xl md:text-5xl">
					{data.hero_title}{' '}
					<span className="block text-brand-accent">{data.hero_title_accent}</span>
				</h1>

				<Link
					href={data.hero_button_url || '#'}
					className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
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
						className="relative mt-8 h-auto w-full max-w-3xl object-contain"
					/>
				)}
			</div>
		</section>
	)
}
