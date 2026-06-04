import Link from 'next/link'
import { redirect } from 'next/navigation'
import { validateUser } from '@/utils/authValidation'
import { Toaster } from '@/components/ui/sonner'
import { LogoutButton } from '@/components/admin/LogoutButton'

const NAV = [
	{ href: '/admin', label: 'Dashboard' },
	{ href: '/admin/settings', label: 'Site Settings' },
	{ href: '/admin/landing', label: 'Landing Page' },
	{ href: '/admin/about', label: 'About Us' },
	{ href: '/admin/programs', label: 'Programs' },
	{ href: '/admin/locations', label: 'Locations' },
	{ href: '/admin/certifications', label: 'Certifications' },
	{ href: '/admin/testimonials', label: 'Testimonials' },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) redirect('/admin/login')

	return (
		<div className="flex min-h-screen">
			<aside className="flex w-60 flex-col border-r p-4">
				<div className="mb-4 font-bold">Little Athlete CMS</div>
				<nav className="flex flex-col gap-1">
					{NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="hover:bg-muted rounded px-2 py-1"
						>
							{item.label}
						</Link>
					))}
				</nav>
				<div className="mt-auto pt-4">
					<LogoutButton />
				</div>
			</aside>
			<div className="flex-1 p-6">{children}</div>
			<Toaster />
		</div>
	)
}
