import Image from 'next/image'
import Link from 'next/link'
import { getSiteSettings } from '@/lib/content'

function InstagramIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	)
}

function WhatsAppIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
			<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z" />
		</svg>
	)
}

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
	const s = await getSiteSettings()

	return (
		<>
			<header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
				<nav className="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-6 py-4">
					<Link href="/" className="flex shrink-0 items-center">
						{s?.logo_url ? (
							<Image
								src={s.logo_url}
								alt="Little Athlete"
								width={60}
								height={60}
								className="h-[60px] w-[60px] object-contain"
								priority
							/>
						) : (
							<span className="text-lg font-bold text-primary">Little Athlete</span>
						)}
					</Link>

					<div className="hidden items-center gap-8 md:flex">
						{(s?.nav_links ?? []).map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-[18px] font-medium text-foreground transition-colors hover:text-primary"
							>
								{link.label}
							</Link>
						))}
					</div>

					{s?.contact_wa_url && (
						<a
							href={s.contact_wa_url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex shrink-0 items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-semibold text-wa-foreground transition-opacity hover:opacity-90"
						>
							<WhatsAppIcon className="size-4" />
							Contact Us
						</a>
					)}
				</nav>
			</header>

			<main>{children}</main>

			<footer className="bg-surface-dark font-footer text-surface-dark-foreground">
				<div className="mx-auto max-w-screen-xl px-6 py-16">
					<div className="grid gap-10 md:grid-cols-12">
						{/* Brand column */}
						<div className="md:col-span-5">
							{s?.logo_url && (
								<Image
									src={s.logo_url}
									alt="Little Athlete"
									width={120}
									height={48}
									className="h-12 w-auto object-contain"
								/>
							)}
							<p className="mt-6 max-w-sm text-sm leading-relaxed text-surface-dark-foreground/70">
								{s?.footer_desc}
							</p>
							<div className="mt-6 flex gap-4">
								{s?.instagram_url && (
									<a
										href={s.instagram_url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Instagram"
										className="text-primary transition-opacity hover:opacity-80"
									>
										<InstagramIcon className="size-6" />
									</a>
								)}
								{s?.whatsapp_url && (
									<a
										href={s.whatsapp_url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="WhatsApp"
										className="text-primary transition-opacity hover:opacity-80"
									>
										<WhatsAppIcon className="size-6" />
									</a>
								)}
							</div>
						</div>

						<FooterCol title="About Us" links={s?.footer_about_links} className="md:col-span-3" />
						<FooterCol title="Programs" links={s?.footer_program_links} className="md:col-span-2" />
						<FooterCol title="More" links={s?.footer_more_links} className="md:col-span-2" />
					</div>

					<div className="mt-14 border-t border-surface-dark-foreground/10 pt-8 text-center text-sm text-surface-dark-foreground/50">
						{s?.copyright_text}
					</div>
				</div>
			</footer>
		</>
	)
}

function FooterCol({
	title,
	links,
	className,
}: {
	title: string
	links?: { label: string; href: string }[]
	className?: string
}) {
	return (
		<div className={className}>
			<h3 className="text-sm font-semibold tracking-wide text-primary uppercase">{title}</h3>
			<ul className="mt-5 space-y-4">
				{(links ?? []).map((link) => (
					<li key={`${link.href}-${link.label}`}>
						<Link
							href={link.href}
							className="text-sm text-surface-dark-foreground/80 transition-colors hover:text-primary"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
