import Link from 'next/link'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

export function CtaBanner({ data }: { data: ILandingPage }) {
	return (
		<section className="bg-background px-6 py-16 sm:py-20">
			<div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-primary bg-linear-to-br from-[#3b6dff] via-primary to-[#1740d6] px-8 py-12 sm:px-12 md:flex-row md:items-center">
				{/* Decorative rings */}
				<div
					aria-hidden
					className="pointer-events-none absolute -top-16 -left-16 size-64 rounded-full border border-primary-foreground/15"
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute -right-20 -bottom-24 size-72 rounded-full border border-primary-foreground/15"
				/>

				<div className="relative max-w-xl">
					<h2 className="text-2xl font-bold text-primary-foreground sm:text-[32px]">
						{data.cta_title}
					</h2>
					<p className="mt-3 text-sm text-primary-foreground/80 sm:text-base">
						{data.cta_desc}
					</p>
				</div>

				<Link
					href={data.cta_button_url || '#'}
					className="relative inline-flex shrink-0 items-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
				>
					{data.cta_button_label}
				</Link>
			</div>
		</section>
	)
}
