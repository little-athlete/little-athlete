import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
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
								width={120}
								height={48}
								className="h-10 w-auto object-contain"
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
								className="text-sm font-medium text-foreground transition-colors hover:text-primary"
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
							<MessageCircle className="size-4" />
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
										<MessageCircle className="size-6" />
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
