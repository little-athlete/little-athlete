import Image from 'next/image'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import { Highlight } from './Highlight'

export function Programs({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-7xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-primary text-2xl font-bold sm:text-3xl md:text-4xl">
						<Highlight text={data.programs_title} accent={data.programs_title_accent} />
					</h2>
					<p className="text-muted-foreground mt-4 text-sm leading-relaxed sm:text-base">
						{data.programs_desc}
					</p>
				</div>

				<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{(data.program_cards ?? []).map((card, i) => (
						<article
							key={`${card.title}-${i}`}
							className="group relative mx-auto aspect-401/715 w-full max-w-100 overflow-hidden rounded-3xl"
						>
							{card.image_url && (
								<Image
									src={card.image_url}
									alt={card.title}
									fill
									sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							)}
							{/* Bottom gradient for text legibility */}
							<div className="from-surface-dark/90 via-surface-dark/20 absolute inset-0 bg-linear-to-t to-transparent" />
							<div className="text-surface-dark-foreground absolute inset-x-0 bottom-0 p-6">
								<h3 className="text-[32px] leading-tight font-bold">
									{card.title}
								</h3>
								<p className="text-surface-dark-foreground/80 mt-2 text-[20px]">
									{card.age_label}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
