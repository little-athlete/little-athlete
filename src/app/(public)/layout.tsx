import Link from 'next/link'
import { getSiteSettings } from '@/lib/content'

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
	const s = await getSiteSettings()

	return (
		<>
			<header className="border-b">
				<nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
					<Link href="/" className="font-bold text-primary">
						Little Athlete
					</Link>
					<div className="flex items-center gap-6">
						{(s?.nav_links ?? []).map((link) => (
							<Link key={link.href} href={link.href} className="text-foreground hover:text-primary">
								{link.label}
							</Link>
						))}
						{s?.contact_wa_url && (
							<a
								href={s.contact_wa_url}
								className="rounded-full bg-wa px-4 py-2 text-wa-foreground"
							>
								Contact Us
							</a>
						)}
					</div>
				</nav>
			</header>

			<main>{children}</main>

			<footer className="bg-surface-dark font-footer text-surface-dark-foreground">
				<div className="mx-auto max-w-screen-xl px-6 py-12">
					<div className="grid gap-8 md:grid-cols-4">
						<p className="text-sm text-muted-foreground">{s?.footer_desc}</p>
						<FooterCol title="About Us" links={s?.footer_about_links} />
						<FooterCol title="Programs" links={s?.footer_program_links} />
						<FooterCol title="More" links={s?.footer_more_links} />
					</div>
					<div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground">
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
}: {
	title: string
	links?: { label: string; href: string }[]
}) {
	return (
		<div>
			<h3 className="mb-4 font-semibold text-primary">{title}</h3>
			<ul className="space-y-2">
				{(links ?? []).map((link) => (
					<li key={link.href}>
						<Link href={link.href} className="hover:text-primary">
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
