import Image from 'next/image'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import { Highlight } from './Highlight'

/*
 * The blue panel shape comes straight from Figma (Vector 23.svg): a 1239 x 504
 * box with a 629 x 147 notch cut from the top-left (radius 20 on the outer +
 * wing corners, ~15.5 on the concave inner corner). Rendered as an inline SVG
 * so the corners match exactly while the fill still follows the --primary token.
 *
 * The title reads on the transparent notch; kids + stats overlay the blue. The
 * SVG is stretched to fill the panel, so every overlay is positioned as a % of
 * the panel (not fixed px) to stay aligned with the notch at any width.
 */
const PANEL_PATH =
	'M20 147H613.5C622.06 147 629 140.06 629 131.5V20C629 8.95431 637.954 0 649 0H1219C1230.05 0 1239 8.95432 1239 20V483.5C1239 494.546 1230.05 503.5 1219 503.5H20C8.9543 503.5 0 494.546 0 483.5V167C0 155.954 8.95429 147 20 147Z'

// Notch + kids geometry as % of the 1239 x 504 panel.
const NOTCH_W = `${((629 / 1239) * 100).toFixed(3)}%` // wing / notch divide
const NOTCH_H = `${((147 / 504) * 100).toFixed(3)}%`
const KIDS = {
	left: `${((60 / 1239) * 100).toFixed(3)}%`,
	top: `${((150 / 504) * 100).toFixed(3)}%`,
	width: `${((570 / 1239) * 100).toFixed(3)}%`,
	height: `${((595.64 / 504) * 100).toFixed(3)}%`,
}

export function Stats({ data }: { data: ILandingPage }) {
	const items = data.stats_items ?? []

	return (
		<section className="bg-background pt-16 pb-16 sm:pt-20 sm:pb-20 md:pb-70">
			<div className="mx-auto w-full max-w-7xl px-6">
				{/* ---------- Mobile: title sits above the panel ---------- */}
				<h2 className="mb-8 text-4xl font-bold text-primary md:hidden">
					<Highlight text={data.stats_title} accent={data.stats_title_accent} />
				</h2>

				{/* ---------- Mobile panel: kids on top, stats grid below ---------- */}
				<div className="rounded-[20px] bg-primary p-6 md:hidden">
					{data.stats_image_url && (
						<div className="relative mx-auto h-56 w-full max-w-xs">
							<Image
								src={data.stats_image_url}
								alt="Little Athlete kids"
								fill
								sizes="80vw"
								className="object-contain object-bottom"
							/>
						</div>
					)}
					<div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
						{items.map((stat, i) => (
							<div key={i} className="text-center">
								<p className="text-3xl font-bold text-primary-foreground">
									{stat.value}
								</p>
								<p className="mt-1 text-xs text-primary-foreground/90">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* ---------- Desktop: notched panel (exact Figma vector) ---------- */}
				<div className="relative hidden aspect-1239/504 w-full md:block">
					{/* Blue panel shape. preserveAspectRatio="none" + matching aspect
					   ratio means it fills the panel with no corner distortion, and
					   fill="currentColor" keeps it tied to the --primary token. */}
					<svg
						viewBox="0 0 1239 504"
						preserveAspectRatio="none"
						fill="none"
						aria-hidden="true"
						className="absolute inset-0 h-full w-full text-primary"
					>
						<path d={PANEL_PATH} fill="currentColor" />
					</svg>

					{/* Title — sits in the transparent notch (white bg shows through).
					   Font clamps so it never wraps as the panel narrows. */}
					<h2
						className="absolute top-0 left-0 z-10 flex items-center pr-4 pl-2 text-[clamp(1.75rem,3.4vw,2.625rem)] leading-[1.1] font-bold text-primary"
						style={{ width: NOTCH_W, height: NOTCH_H }}
					>
						{/* Wrapped so the whole title is ONE flex item — otherwise flex
						   trims the whitespace between the accent span and the text. */}
						<span>
							<Highlight
								text={data.stats_title}
								accent={data.stats_title_accent}
							/>
						</span>
					</h2>

					{/* Kids — overflow the bottom edge for the playful look */}
					{data.stats_image_url && (
						<div
							className="absolute z-10"
							style={{
								left: KIDS.left,
								top: KIDS.top,
								width: KIDS.width,
								height: KIDS.height,
							}}
						>
							<Image
								src={data.stats_image_url}
								alt="Little Athlete kids"
								fill
								sizes="46vw"
								className="object-contain object-bottom"
							/>
						</div>
					)}

					{/* Stats — right of the notch, 2 cols x 3 rows, evenly distributed */}
					<div
						className="absolute top-0 right-0 z-10 grid h-full grid-cols-2 grid-rows-3 items-center gap-x-10 px-10"
						style={{ left: NOTCH_W }}
					>
						{items.map((stat, i) => (
							<div key={i} className="text-center">
								<p className="text-[clamp(2rem,3.9vw,3rem)] leading-none font-bold text-primary-foreground">
									{stat.value}
								</p>
								<p className="mt-2 text-base text-primary-foreground/90">
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
