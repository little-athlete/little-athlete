import Image from 'next/image'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import { Highlight } from './Highlight'

export function Stats({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-primary py-16 sm:py-20">
			<div className="mx-auto max-w-screen-xl px-6">
				<h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
					<Highlight text={data.stats_title} accent={data.stats_title_accent} />
				</h2>

				<div className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-12">
					{/* Character PNG */}
					{data.stats_image_url && (
						<div className="relative mx-auto h-64 w-full max-w-sm sm:h-80">
							<Image
								src={data.stats_image_url}
								alt="Little Athlete kids"
								fill
								sizes="(min-width: 768px) 40vw, 80vw"
								className="object-contain"
							/>
						</div>
					)}

					{/* Stats card */}
					<div className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-3xl bg-surface-dark p-8 sm:p-10">
						{(data.stats_items ?? []).map((stat, i) => (
							<div key={i} className="text-center">
								<p className="text-3xl font-bold text-surface-dark-foreground sm:text-4xl">
									{stat.value}
								</p>
								<p className="mt-1 text-xs text-surface-dark-foreground/70 sm:text-sm">
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
