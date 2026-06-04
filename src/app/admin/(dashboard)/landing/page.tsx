import { getLandingPage } from '@/lib/content'
import { LandingForm } from '@/components/admin/LandingForm'

export default async function LandingAdminPage() {
	const landing = await getLandingPage()
	return (
		<div className="space-y-6">
			<h1 className="text-2xl font-bold">Landing Page</h1>
			<LandingForm initial={landing} />
		</div>
	)
}
