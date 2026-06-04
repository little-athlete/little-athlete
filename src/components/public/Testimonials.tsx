'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import type { ILandingPage, ITestimonial } from '@/db/firestore/interfaces/landing'

function Stars({ count }: { count: number }) {
	return (
		<div className="flex gap-1">
			{Array.from({ length: count }).map((_, i) => (
				<Star key={i} className="size-5 fill-primary text-primary" />
			))}
		</div>
	)
}

export function Testimonials({ data }: { data: ILandingPage }) {
	const items = data.testimonials ?? []

	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="mx-auto max-w-screen-xl px-6">
				<div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
					{/* Decorative character image */}
					{data.testimony_image_url && (
						<div className="relative mx-auto hidden h-72 w-full max-w-sm md:block">
							<Image
								src={data.testimony_image_url}
								alt="Little Athlete kids playing music"
								fill
								sizes="40vw"
								className="object-contain"
							/>
						</div>
					)}

					<div>
						<p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
							{data.testimony_eyebrow}
						</p>
						<h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
							{data.testimony_title}
						</h2>

						<Carousel opts={{ align: 'start', loop: true }} className="mt-8">
							<CarouselContent>
								{items.map((t: ITestimonial, i) => (
									<CarouselItem key={i} className="sm:basis-1/2">
										<figure className="h-full rounded-2xl border border-border p-6">
											<Stars count={t.stars} />
											<blockquote className="mt-4 text-sm leading-relaxed text-foreground">
												&ldquo;{t.quote}&rdquo;
											</blockquote>
											<figcaption className="mt-5 text-sm font-semibold text-foreground">
												{t.name}
											</figcaption>
										</figure>
									</CarouselItem>
								))}
							</CarouselContent>
							<div className="mt-8 flex gap-3">
								<CarouselPrevious className="static translate-y-0" />
								<CarouselNext className="static translate-y-0" />
							</div>
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	)
}
