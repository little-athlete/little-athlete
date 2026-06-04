import { getSiteSettings } from '@/lib/content'
import { SiteSettingsForm } from '@/components/admin/SiteSettingsForm'

export default async function SettingsAdminPage() {
	const settings = await getSiteSettings()
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Site Settings</h1>
			<SiteSettingsForm initial={settings} />
		</div>
	)
}
