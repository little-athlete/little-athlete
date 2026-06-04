'use client'

import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RepeatableList } from '@/components/admin/RepeatableList'
import { saveLandingPage } from '@/actions/landingActions'
import type {
	ILandingPage,
	IProgramCard,
	IStatItem,
	ITestimonial,
} from '@/db/firestore/interfaces/landing'

const EMPTY: ILandingPage = {
	id: 'page_landing',
	hero_title: '',
	hero_title_accent: '',
	hero_button_label: '',
	hero_button_url: '',
	hero_image_url: '',
	slider_images: [],
	story_eyebrow: '',
	story_title: '',
	story_title_accent: '',
	story_desc: '',
	story_primary_label: '',
	story_primary_url: '',
	story_secondary_label: '',
	story_secondary_url: '',
	story_image_url: '',
	programs_title: '',
	programs_title_accent: '',
	programs_desc: '',
	program_cards: [],
	stats_title: '',
	stats_title_accent: '',
	stats_image_url: '',
	stats_items: [],
	testimony_title: '',
	testimonials: [],
	cta_title: '',
	cta_desc: '',
	cta_button_label: '',
	cta_button_url: '',
}

function Field({
	label,
	value,
	onChange,
}: {
	label: string
	value: string
	onChange: (v: string) => void
}) {
	return (
		<div className="grid gap-2">
			<Label>{label}</Label>
			<Input value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	)
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<section className="space-y-4 rounded-lg border p-4">
			<h2 className="font-semibold">{title}</h2>
			{children}
		</section>
	)
}

export function LandingForm({ initial }: { initial: ILandingPage | null }) {
	const [data, setData] = useState<ILandingPage>(initial ?? EMPTY)
	const [isPending, startTransition] = useTransition()
	const set = (patch: Partial<ILandingPage>) => setData((d) => ({ ...d, ...patch }))

	const onSave = () => {
		startTransition(async () => {
			try {
				await saveLandingPage(data)
				toast.success('Landing page saved')
			} catch {
				toast.error('Failed to save')
			}
		})
	}

	return (
		<div className="max-w-3xl space-y-6">
			<Section title="Hero">
				<Field label="Title" value={data.hero_title} onChange={(v) => set({ hero_title: v })} />
				<Field label="Title accent (orange)" value={data.hero_title_accent} onChange={(v) => set({ hero_title_accent: v })} />
				<Field label="Button label" value={data.hero_button_label} onChange={(v) => set({ hero_button_label: v })} />
				<Field label="Button URL" value={data.hero_button_url} onChange={(v) => set({ hero_button_url: v })} />
				<Field label="Image URL" value={data.hero_image_url} onChange={(v) => set({ hero_image_url: v })} />
			</Section>

			<Section title="Image slider">
				<RepeatableList<string>
					label="Slider images"
					items={data.slider_images}
					onChange={(v) => set({ slider_images: v })}
					newItem={() => ''}
					renderItem={(item, update) => (
						<Input placeholder="/landing/slider-x.jpg" value={item} onChange={(e) => update(e.target.value as unknown as Partial<string>)} />
					)}
				/>
			</Section>

			<Section title="Our Story">
				<Field label="Eyebrow" value={data.story_eyebrow} onChange={(v) => set({ story_eyebrow: v })} />
				<Field label="Title (blue)" value={data.story_title} onChange={(v) => set({ story_title: v })} />
				<Field label="Title accent (orange)" value={data.story_title_accent} onChange={(v) => set({ story_title_accent: v })} />
				<Field label="Description" value={data.story_desc} onChange={(v) => set({ story_desc: v })} />
				<Field label="Primary button label" value={data.story_primary_label} onChange={(v) => set({ story_primary_label: v })} />
				<Field label="Primary button URL" value={data.story_primary_url} onChange={(v) => set({ story_primary_url: v })} />
				<Field label="Secondary button label" value={data.story_secondary_label} onChange={(v) => set({ story_secondary_label: v })} />
				<Field label="Secondary button URL" value={data.story_secondary_url} onChange={(v) => set({ story_secondary_url: v })} />
				<Field label="Image URL" value={data.story_image_url} onChange={(v) => set({ story_image_url: v })} />
			</Section>

			<Section title="Programs">
				<Field label="Title" value={data.programs_title} onChange={(v) => set({ programs_title: v })} />
				<Field label="Title accent (orange)" value={data.programs_title_accent} onChange={(v) => set({ programs_title_accent: v })} />
				<Field label="Description" value={data.programs_desc} onChange={(v) => set({ programs_desc: v })} />
				<RepeatableList<IProgramCard>
					label="Program cards"
					items={data.program_cards}
					onChange={(v) => set({ program_cards: v })}
					newItem={() => ({ title: '', age_label: '', image_url: '' })}
					renderItem={(item, update) => (
						<>
							<Input placeholder="Title" value={item.title} onChange={(e) => update({ title: e.target.value })} />
							<Input placeholder="Age label" value={item.age_label} onChange={(e) => update({ age_label: e.target.value })} />
							<Input placeholder="Image URL" value={item.image_url} onChange={(e) => update({ image_url: e.target.value })} />
						</>
					)}
				/>
			</Section>

			<Section title="Stats">
				<Field label="Title" value={data.stats_title} onChange={(v) => set({ stats_title: v })} />
				<Field label="Title accent (orange)" value={data.stats_title_accent} onChange={(v) => set({ stats_title_accent: v })} />
				<Field label="Image URL" value={data.stats_image_url} onChange={(v) => set({ stats_image_url: v })} />
				<RepeatableList<IStatItem>
					label="Stat items"
					items={data.stats_items}
					onChange={(v) => set({ stats_items: v })}
					newItem={() => ({ value: '', label: '' })}
					renderItem={(item, update) => (
						<>
							<Input placeholder="Value (e.g. 4.000)" value={item.value} onChange={(e) => update({ value: e.target.value })} />
							<Input placeholder="Label" value={item.label} onChange={(e) => update({ label: e.target.value })} />
						</>
					)}
				/>
			</Section>

			<Section title="Testimonials">
				<Field label="Section title" value={data.testimony_title} onChange={(v) => set({ testimony_title: v })} />
				<RepeatableList<ITestimonial>
					label="Testimonials"
					items={data.testimonials}
					onChange={(v) => set({ testimonials: v })}
					newItem={() => ({ quote: '', name: '', stars: 5 })}
					renderItem={(item, update) => (
						<>
							<Input placeholder="Quote" value={item.quote} onChange={(e) => update({ quote: e.target.value })} />
							<Input placeholder="Name" value={item.name} onChange={(e) => update({ name: e.target.value })} />
							<Input type="number" min={1} max={5} placeholder="Stars" value={item.stars} onChange={(e) => update({ stars: Number(e.target.value) })} />
						</>
					)}
				/>
			</Section>

			<Section title="CTA banner">
				<Field label="Title" value={data.cta_title} onChange={(v) => set({ cta_title: v })} />
				<Field label="Description" value={data.cta_desc} onChange={(v) => set({ cta_desc: v })} />
				<Field label="Button label" value={data.cta_button_label} onChange={(v) => set({ cta_button_label: v })} />
				<Field label="Button URL" value={data.cta_button_url} onChange={(v) => set({ cta_button_url: v })} />
			</Section>

			<Button onClick={onSave} disabled={isPending}>
				{isPending ? 'Saving…' : 'Save'}
			</Button>
		</div>
	)
}
