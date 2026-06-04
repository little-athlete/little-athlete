'use client'

import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RepeatableList } from '@/components/admin/RepeatableList'
import { ImageUpload } from '@/components/admin/ImageUpload'
import { saveSiteSettings } from '@/actions/settingsActions'
import type { INavLink, ISiteSettings } from '@/db/firestore/interfaces/site_settings'

const EMPTY: ISiteSettings = {
	id: 'site_settings',
	logo_url: '',
	nav_links: [],
	contact_wa_url: '',
	footer_desc: '',
	footer_about_links: [],
	footer_program_links: [],
	footer_more_links: [],
	instagram_url: '',
	whatsapp_url: '',
	copyright_text: '',
	seo_default_title: '',
	seo_default_description: '',
}

function LinkRows({
	label,
	value,
	onChange,
}: {
	label: string
	value: INavLink[]
	onChange: (v: INavLink[]) => void
}) {
	return (
		<RepeatableList<INavLink>
			label={label}
			items={value}
			onChange={onChange}
			newItem={() => ({ label: '', href: '' })}
			renderItem={(item, update) => (
				<div className="grid grid-cols-2 gap-2">
					<Input placeholder="Label" value={item.label} onChange={(e) => update({ label: e.target.value })} />
					<Input placeholder="/href" value={item.href} onChange={(e) => update({ href: e.target.value })} />
				</div>
			)}
		/>
	)
}

export function SiteSettingsForm({ initial }: { initial: ISiteSettings | null }) {
	const [data, setData] = useState<ISiteSettings>(initial ?? EMPTY)
	const [isPending, startTransition] = useTransition()
	const set = (patch: Partial<ISiteSettings>) => setData((d) => ({ ...d, ...patch }))

	const onSave = () => {
		startTransition(async () => {
			try {
				await saveSiteSettings(data)
				toast.success('Site settings saved')
			} catch {
				toast.error('Failed to save')
			}
		})
	}

	return (
		<div className="max-w-2xl space-y-6">
			<ImageUpload label="Logo" value={data.logo_url} onChange={(v) => set({ logo_url: v })} folder="settings" />
			<div className="grid gap-2">
				<Label>Contact WhatsApp URL (header button)</Label>
				<Input value={data.contact_wa_url} onChange={(e) => set({ contact_wa_url: e.target.value })} />
			</div>

			<LinkRows label="Header nav links" value={data.nav_links} onChange={(v) => set({ nav_links: v })} />

			<div className="grid gap-2">
				<Label>Footer description</Label>
				<Input value={data.footer_desc} onChange={(e) => set({ footer_desc: e.target.value })} />
			</div>
			<LinkRows label="Footer · About Us links" value={data.footer_about_links} onChange={(v) => set({ footer_about_links: v })} />
			<LinkRows label="Footer · Programs links" value={data.footer_program_links} onChange={(v) => set({ footer_program_links: v })} />
			<LinkRows label="Footer · More links" value={data.footer_more_links} onChange={(v) => set({ footer_more_links: v })} />

			<div className="grid gap-2">
				<Label>Instagram URL</Label>
				<Input value={data.instagram_url} onChange={(e) => set({ instagram_url: e.target.value })} />
			</div>
			<div className="grid gap-2">
				<Label>WhatsApp URL (footer)</Label>
				<Input value={data.whatsapp_url} onChange={(e) => set({ whatsapp_url: e.target.value })} />
			</div>
			<div className="grid gap-2">
				<Label>Copyright text</Label>
				<Input value={data.copyright_text} onChange={(e) => set({ copyright_text: e.target.value })} />
			</div>

			<div className="grid gap-2">
				<Label>Default SEO title</Label>
				<Input value={data.seo_default_title} onChange={(e) => set({ seo_default_title: e.target.value })} />
			</div>
			<div className="grid gap-2">
				<Label>Default SEO description</Label>
				<Input value={data.seo_default_description} onChange={(e) => set({ seo_default_description: e.target.value })} />
			</div>

			<Button onClick={onSave} disabled={isPending}>
				{isPending ? 'Saving…' : 'Save'}
			</Button>
		</div>
	)
}
