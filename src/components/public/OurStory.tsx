import Image from 'next/image'
import Link from 'next/link'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

export function OurStory({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-section-muted py-16 sm:py-20">
			<div className="mx-auto grid max-w-screen-xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14">
				{/* Text column */}
				<div>
					<h2 className="text-3xl leading-tight font-bold sm:text-4xl md:text-[42px]">
						<span className="text-primary">{data.story_title}</span>
						<br />
						<span className="text-brand-accent">{data.story_title_accent}</span>
					</h2>
					<p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
						{data.story_desc}
					</p>
					<div className="mt-7 flex flex-wrap gap-3">
						<Link
							href={data.story_primary_url || '#'}
							className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
						>
							{data.story_primary_label}
						</Link>
						<Link
							href={data.story_secondary_url || '#'}
							className="inline-flex items-center rounded-full bg-primary-soft px-5 py-2.5 text-sm font-semibold text-primary-soft-foreground transition-colors hover:bg-primary-soft/70"
						>
							{data.story_secondary_label}
						</Link>
					</div>
				</div>

				{/* Image column */}
				{data.story_image_url && (
					<div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
						<Image
							src={data.story_image_url}
							alt="Coaching session at Little Athlete"
							fill
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
				)}
			</div>
		</section>
	)
}
