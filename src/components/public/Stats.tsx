import Image from 'next/image'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import { Highlight } from './Highlight'

export function Stats({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-screen-xl px-6">
				{/* Title sits on the white background, above the blue panel */}
				<h2 className="text-3xl font-bold text-primary sm:text-4xl">
					<Highlight text={data.stats_title} accent={data.stats_title_accent} />
				</h2>

				{/* Blue panel: kids on the left, white stats grid on the right */}
				<div className="relative mt-8 grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-primary px-8 py-10 md:grid-cols-2 md:gap-12 md:px-14 md:py-12">
					{/* Character PNG — overflows the bottom edge for a playful look */}
					{data.stats_image_url && (
						<div className="relative mx-auto -mb-10 h-64 w-full max-w-sm sm:h-80 md:-mb-12">
							<Image
								src={data.stats_image_url}
								alt="Little Athlete kids"
								fill
								sizes="(min-width: 768px) 40vw, 80vw"
								className="object-contain"
							/>
						</div>
					)}

					{/* Stats grid — white text directly on the blue panel */}
					<div className="grid grid-cols-2 gap-x-6 gap-y-8">
						{(data.stats_items ?? []).map((stat, i) => (
							<div key={i} className="text-center">
								<p className="text-3xl font-bold text-primary-foreground sm:text-4xl">
									{stat.value}
								</p>
								<p className="mt-1 text-xs text-primary-foreground/80 sm:text-sm">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
