import Link from 'next/link'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import { CtaLeftShape } from './CtaLeftShape'
import { CtaRightShape } from './CtaRightShape'

export function CtaBanner({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-background py-16 sm:py-20">
			<div className="relative mx-auto flex h-[196px] max-w-screen-xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-linear-to-br from-[#3b6dff] to-[#1740d6] px-6 md:flex-row md:items-center">
				<CtaLeftShape />
				<CtaRightShape />

				<div className="relative z-10">
					<h2 className="text-primary-foreground text-[32px] leading-tight font-bold">
						{data.cta_title}
					</h2>
					<p className="text-primary-foreground/80 mt-3 text-sm sm:text-base">
						{data.cta_desc}
					</p>
				</div>

				<Link
					href={data.cta_button_url || '#'}
					className="bg-background text-primary hover:bg-background/90 relative z-10 inline-flex shrink-0 items-center rounded-full px-6 py-3 text-sm font-semibold transition-colors"
				>
					{data.cta_button_label}
				</Link>
			</div>
		</section>
	)
}
