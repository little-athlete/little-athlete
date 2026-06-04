# Landing Module — Data + Admin + Seed Implementation Plan (Plan 1 of 2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the v2 data contract, server data-access layer, admin edit forms, and seed for the Landing page + a minimal Site Settings singleton — so the public Landing page (Plan 2) renders from real, editable data.

**Architecture:** Singleton content docs live in Firestore collection `singletons` (`page_landing`, `site_settings`). All reads/writes go through the **firebase-admin SDK** on the server (`adminDb`) — never the client SDK — to stay SEO-friendly (server components) and secure (server actions). Admin pages are server components that load data and hand it to client form components; forms post to guarded server actions that save + `revalidatePath()`. Header/Footer in the public layout read `site_settings` server-side.

**Tech Stack:** Next.js 15.5 (App Router, RSC), TypeScript, firebase-admin 13, Tailwind v4 + shadcn/ui, vitest, tsx (seed).

**Scope note:** This is Plan 1 (data/admin/seed). Plan 2 builds the pixel-perfect public Landing sections + slider packages. Program cards and testimonials are **denormalized into `page_landing`** for now (curated landing content); when the dedicated `programs`/`testimonials` collections are built later, reconcile then. Admin image fields are plain URL text inputs in Plan 1; a Firebase Storage upload widget is a later enhancement (seed points images at `/public` assets).

---

## File Structure

**Create:**
- `src/db/firestore/interfaces/site_settings.ts` — `ISiteSettings` + sub-types
- `src/lib/server-db.ts` — generic `getSingleton`/`saveSingleton` via `adminDb`
- `src/lib/server-db.test.ts` — tests for the generic helpers
- `src/lib/content.ts` — typed getters `getSiteSettings()`, `getLandingPage()`
- `src/actions/landingActions.ts` — `saveLandingPage()` (guarded, revalidates `/`)
- `src/actions/settingsActions.ts` — `saveSiteSettings()` (guarded, revalidates layout)
- `src/actions/contentActions.test.ts` — tests for both actions
- `src/components/admin/RepeatableList.tsx` — reusable add/remove list editor
- `src/components/admin/LandingForm.tsx` — client form for `page_landing`
- `src/components/admin/SiteSettingsForm.tsx` — client form for `site_settings`

**Modify:**
- `src/db/firestore/interfaces/landing.ts` — replace v1 interface with v2 `ILandingPage`
- `scripts/seed.ts` — full default `page_landing` + `site_settings` matching interfaces
- `src/app/admin/(dashboard)/landing/page.tsx` — server component: load + render `LandingForm`
- `src/app/admin/(dashboard)/settings/page.tsx` — server component: load + render `SiteSettingsForm`
- `src/app/(public)/layout.tsx` — header + footer wired to `site_settings`
- `docs/superpowers/specs/2026-06-03-v2-revamp-design.md` — progress tracker row

**Delete:**
- `src/db/firestore/landing_page.ts` — client-SDK singleton helper, replaced by `src/lib/content.ts`

---

## Task 1: v2 Landing data contract (interface)

**Files:**
- Modify: `src/db/firestore/interfaces/landing.ts` (full replace)

- [ ] **Step 1: Replace the v1 interface with the v2 contract**

Replace the **entire** contents of `src/db/firestore/interfaces/landing.ts` with:

```typescript
// Landing page (singleton) — v2 data contract derived from Figma.
// Highlight pattern: `*_accent` is a substring of its paired title, rendered in `text-brand-accent`.

export interface IProgramCard {
	title: string // "School Readiness Program"
	age_label: string // "Toddler (1.5–3yo)"
	image_url: string
}

export interface IStatItem {
	value: string // "4.000"
	label: string // "Little athlete registered"
}

export interface ITestimonial {
	quote: string
	name: string // "Jen** Wil***"
	stars: number // 1–5
}

export interface ILandingPage {
	id: string

	// Hero
	hero_title: string // "Helping your little ones grow through the power of"
	hero_title_accent: string // "Sports & Music"
	hero_button_label: string // "Enjoy the Free Trial"
	hero_button_url: string
	hero_image_url: string // 3-characters PNG

	// Infinite image slider
	slider_images: string[]

	// Our Story
	story_eyebrow: string // "OUR STORY"
	story_title: string // "The First Ever" (primary blue)
	story_title_accent: string // "Semi Private & Sports Music School" (brand-accent)
	story_desc: string
	story_primary_label: string // "Book Free Trial"
	story_primary_url: string
	story_secondary_label: string // "Certifications"
	story_secondary_url: string
	story_image_url: string

	// Programs
	programs_title: string // "From Sports to Music for Kids 1–12yo"
	programs_title_accent: string // "Sports to Music"
	programs_desc: string
	program_cards: IProgramCard[]

	// Stats
	stats_title: string // "The trust that we earned"
	stats_title_accent: string // "trust"
	stats_image_url: string // 2-kids PNG
	stats_items: IStatItem[]

	// Testimonials
	testimony_title: string // "420+ Happy Parents"
	testimonials: ITestimonial[]

	// CTA banner
	cta_title: string // "Ready to join the Little Athlete family? 🌟"
	cta_desc: string // "Start with a free trial class — no commitment needed."
	cta_button_label: string // "Start Your Free Trial"
	cta_button_url: string
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: errors only in files still importing the old `ILandingPage` shape (`src/db/firestore/landing_page.ts`) — those are removed in Task 3. Note them and continue.

- [ ] **Step 3: Commit**

```bash
git add src/db/firestore/interfaces/landing.ts
git commit -m "feat(landing): define v2 ILandingPage data contract"
```

---

## Task 2: Site Settings data contract (interface)

**Files:**
- Create: `src/db/firestore/interfaces/site_settings.ts`

- [ ] **Step 1: Create the interface**

Create `src/db/firestore/interfaces/site_settings.ts`:

```typescript
// Site-wide settings (singleton) — header + footer + global SEO.

export interface INavLink {
	label: string
	href: string
}

export interface ISiteSettings {
	id: string
	logo_url: string
	nav_links: INavLink[] // header: About Us, Programs, Location, Certifications
	contact_wa_url: string // header "Contact Us" button

	footer_desc: string
	footer_about_links: INavLink[] // Vision and Mission, Achievement
	footer_program_links: INavLink[] // Multi Sports, Basketball and Karate, Multi Instruments, Motoric Class
	footer_more_links: INavLink[] // Location, Certification
	instagram_url: string
	whatsapp_url: string
	copyright_text: string // "© Copyright 2026, All Rights Reserved by Little Athlete"

	seo_default_title: string
	seo_default_description: string
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no new errors from this file.

- [ ] **Step 3: Commit**

```bash
git add src/db/firestore/interfaces/site_settings.ts
git commit -m "feat(settings): define ISiteSettings data contract"
```

---

## Task 3: Server data-access layer (admin SDK singletons)

**Files:**
- Create: `src/lib/server-db.ts`
- Create: `src/lib/server-db.test.ts`
- Create: `src/lib/content.ts`
- Delete: `src/db/firestore/landing_page.ts`

- [ ] **Step 1: Write the failing test**

Create `src/lib/server-db.test.ts`:

```typescript
import { describe, expect, it, vi, beforeEach } from 'vitest'

const getMock = vi.fn()
const setMock = vi.fn()
const docMock = vi.fn(() => ({ get: getMock, set: setMock }))
const collectionMock = vi.fn(() => ({ doc: docMock }))

vi.mock('@/lib/firebase-admin', () => ({
  adminDb: { collection: collectionMock },
}))

import { getSingleton, saveSingleton } from './server-db'

beforeEach(() => {
  vi.clearAllMocks()
})

describe('getSingleton', () => {
  it('returns data with id when the doc exists', async () => {
    getMock.mockResolvedValueOnce({ exists: true, data: () => ({ title: 'X' }) })
    const result = await getSingleton('page_landing')
    expect(collectionMock).toHaveBeenCalledWith('singletons')
    expect(docMock).toHaveBeenCalledWith('page_landing')
    expect(result).toEqual({ title: 'X', id: 'page_landing' })
  })

  it('returns null when the doc does not exist', async () => {
    getMock.mockResolvedValueOnce({ exists: false })
    const result = await getSingleton('page_landing')
    expect(result).toBeNull()
  })
})

describe('saveSingleton', () => {
  it('merges data into the singleton doc', async () => {
    setMock.mockResolvedValueOnce(undefined)
    await saveSingleton('site_settings', { logo_url: 'a' })
    expect(docMock).toHaveBeenCalledWith('site_settings')
    expect(setMock).toHaveBeenCalledWith({ logo_url: 'a' }, { merge: true })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/server-db.test.ts`
Expected: FAIL — `Cannot find module './server-db'`.

- [ ] **Step 3: Create the implementation**

Create `src/lib/server-db.ts`:

```typescript
import 'server-only'
import { adminDb } from '@/lib/firebase-admin'

const SINGLETONS = 'singletons'

export async function getSingleton<T>(id: string): Promise<T | null> {
	const snap = await adminDb.collection(SINGLETONS).doc(id).get()
	if (!snap.exists) return null
	return { ...snap.data(), id } as T
}

export async function saveSingleton(id: string, data: object): Promise<void> {
	await adminDb.collection(SINGLETONS).doc(id).set(data, { merge: true })
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/server-db.test.ts`
Expected: PASS (3 tests).

> Note: `import 'server-only'` is excluded from vitest via the mock graph; if the test runner errors on it, add `'server-only': resolve to empty` is unnecessary — vitest resolves the real package which is a no-op outside RSC bundling. If it does error, change the import line to `// server-only` comment is NOT acceptable; instead mock it: add `vi.mock('server-only', () => ({}))` at the top of the test.

- [ ] **Step 5: Create typed getters**

Create `src/lib/content.ts`:

```typescript
import 'server-only'
import { getSingleton } from '@/lib/server-db'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'
import type { ISiteSettings } from '@/db/firestore/interfaces/site_settings'

export const SINGLETON_IDS = {
	landing: 'page_landing',
	settings: 'site_settings',
} as const

export function getLandingPage() {
	return getSingleton<ILandingPage>(SINGLETON_IDS.landing)
}

export function getSiteSettings() {
	return getSingleton<ISiteSettings>(SINGLETON_IDS.settings)
}
```

- [ ] **Step 6: Delete the obsolete client-SDK helper**

```bash
git rm src/db/firestore/landing_page.ts
```

- [ ] **Step 7: Typecheck + full test run**

Run: `npx tsc --noEmit && npx vitest run`
Expected: PASS, no type errors (the v1 `landing_page.ts` consumer is gone).

- [ ] **Step 8: Commit**

```bash
git add src/lib/server-db.ts src/lib/server-db.test.ts src/lib/content.ts
git commit -m "feat(data): admin-SDK singleton read/write layer + typed getters"
```

---

## Task 4: Guarded server actions (save + revalidate)

**Files:**
- Create: `src/actions/landingActions.ts`
- Create: `src/actions/settingsActions.ts`
- Create: `src/actions/contentActions.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/actions/contentActions.test.ts`:

```typescript
import { describe, expect, it, vi, beforeEach } from 'vitest'

const saveSingleton = vi.fn()
const revalidatePath = vi.fn()
const validateUser = vi.fn()

vi.mock('@/lib/server-db', () => ({ saveSingleton }))
vi.mock('next/cache', () => ({ revalidatePath }))
vi.mock('@/utils/authValidation', () => ({ validateUser }))

import { saveLandingPage } from './landingActions'
import { saveSiteSettings } from './settingsActions'

beforeEach(() => {
  vi.clearAllMocks()
  validateUser.mockResolvedValue({ isVerifyUser: true })
})

describe('saveLandingPage', () => {
  it('rejects when the user is not verified', async () => {
    validateUser.mockResolvedValueOnce({ isVerifyUser: false })
    await expect(saveLandingPage({ hero_title: 'x' } as never)).rejects.toThrow('Unauthorized')
    expect(saveSingleton).not.toHaveBeenCalled()
  })

  it('saves to page_landing and revalidates the homepage', async () => {
    await saveLandingPage({ hero_title: 'x' } as never)
    expect(saveSingleton).toHaveBeenCalledWith('page_landing', { hero_title: 'x' })
    expect(revalidatePath).toHaveBeenCalledWith('/')
  })
})

describe('saveSiteSettings', () => {
  it('saves to site_settings and revalidates the layout', async () => {
    await saveSiteSettings({ logo_url: 'a' } as never)
    expect(saveSingleton).toHaveBeenCalledWith('site_settings', { logo_url: 'a' })
    expect(revalidatePath).toHaveBeenCalledWith('/', 'layout')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/actions/contentActions.test.ts`
Expected: FAIL — `Cannot find module './landingActions'`.

- [ ] **Step 3: Implement the landing action**

Create `src/actions/landingActions.ts`:

```typescript
'use server'

import { revalidatePath } from 'next/cache'
import { saveSingleton } from '@/lib/server-db'
import { validateUser } from '@/utils/authValidation'
import { SINGLETON_IDS } from '@/lib/content'
import type { ILandingPage } from '@/db/firestore/interfaces/landing'

export async function saveLandingPage(data: ILandingPage): Promise<void> {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) throw new Error('Unauthorized')

	await saveSingleton(SINGLETON_IDS.landing, data)
	revalidatePath('/')
}
```

- [ ] **Step 4: Implement the settings action**

Create `src/actions/settingsActions.ts`:

```typescript
'use server'

import { revalidatePath } from 'next/cache'
import { saveSingleton } from '@/lib/server-db'
import { validateUser } from '@/utils/authValidation'
import { SINGLETON_IDS } from '@/lib/content'
import type { ISiteSettings } from '@/db/firestore/interfaces/site_settings'

export async function saveSiteSettings(data: ISiteSettings): Promise<void> {
	const { isVerifyUser } = await validateUser()
	if (!isVerifyUser) throw new Error('Unauthorized')

	await saveSingleton(SINGLETON_IDS.settings, data)
	revalidatePath('/', 'layout')
}
```

> Verify `validateUser` returns `{ isVerifyUser }` — confirmed in `src/utils/authValidation.ts` (used the same way in `src/app/admin/(dashboard)/layout.tsx`). If the property name differs, match it in both actions and the test.

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/actions/contentActions.test.ts`
Expected: PASS (4 tests).

- [ ] **Step 6: Commit**

```bash
git add src/actions/landingActions.ts src/actions/settingsActions.ts src/actions/contentActions.test.ts
git commit -m "feat(actions): guarded save actions for landing + site settings"
```

---

## Task 5: Seed default content

**Files:**
- Modify: `scripts/seed.ts` (full replace)

- [ ] **Step 1: Replace the seed with full default docs**

Replace the **entire** contents of `scripts/seed.ts` with:

```typescript
import 'dotenv/config'
import { adminDb } from '../src/lib/firebase-admin'
import type { ILandingPage } from '../src/db/firestore/interfaces/landing'
import type { ISiteSettings } from '../src/db/firestore/interfaces/site_settings'

/**
 * Seed singleton docs so the admin has something to edit and the public
 * page renders real content. Run once: `npm run seed`.
 * `merge: true` keeps any edits already made in the admin.
 * Image URLs point at /public placeholders until replaced via the admin.
 */

const siteSettings: Omit<ISiteSettings, 'id'> = {
  logo_url: '/logo.svg',
  nav_links: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Programs', href: '/program' },
    { label: 'Location', href: '/location' },
    { label: 'Certifications', href: '/certification' },
  ],
  contact_wa_url: 'https://wa.me/620000000000',
  footer_desc:
    'Little Athlete is a premium, semi-private sports and music school in Indonesia for children aged 1-12. It focuses on personalized early childhood development by keeping class sizes very small.',
  footer_about_links: [
    { label: 'Vision and Mission', href: '/about-us#vision' },
    { label: 'Achievement', href: '/about-us#achievement' },
  ],
  footer_program_links: [
    { label: 'Multi Sports', href: '/program' },
    { label: 'Basketball and Karate', href: '/program' },
    { label: 'Multi Instruments', href: '/program' },
    { label: 'Motoric Class', href: '/program' },
  ],
  footer_more_links: [
    { label: 'Location', href: '/location' },
    { label: 'Certification', href: '/certification' },
  ],
  instagram_url: 'https://instagram.com/littleathlete',
  whatsapp_url: 'https://wa.me/620000000000',
  copyright_text: '© Copyright 2026, All Rights Reserved by Little Athlete',
  seo_default_title: 'Little Athlete | Semi-Private Sports & Music School for Kids',
  seo_default_description:
    'Premium semi-private sports and music school in Indonesia for children aged 1-12. Personalized early childhood development in very small classes.',
}

const pageLanding: Omit<ILandingPage, 'id'> = {
  hero_title: 'Helping your little ones grow through the power of',
  hero_title_accent: 'Sports & Music',
  hero_button_label: 'Enjoy the Free Trial',
  hero_button_url: 'https://wa.me/620000000000',
  hero_image_url: '/landing/hero-characters.png',

  slider_images: [
    '/landing/slider-1.jpg',
    '/landing/slider-2.jpg',
    '/landing/slider-3.jpg',
    '/landing/slider-4.jpg',
  ],

  story_eyebrow: 'OUR STORY',
  story_title: 'The First Ever',
  story_title_accent: 'Semi Private & Sports Music School',
  story_desc:
    'Little Athlete is a premium semi-private sports and music school in Indonesia for children aged 3-12. We focus on personalised early childhood development by keeping class sizes very small.',
  story_primary_label: 'Book Free Trial',
  story_primary_url: 'https://wa.me/620000000000',
  story_secondary_label: 'Certifications',
  story_secondary_url: '/certification',
  story_image_url: '/landing/story.jpg',

  programs_title: 'From Sports to Music for Kids 1-12yo',
  programs_title_accent: 'Sports to Music',
  programs_desc:
    'We help kids build confidence and a love for sports through fun, structured training. At the same time, we nurture creativity and self-expression with engaging early childhood music lessons. Whether they love to move, play, or make music, we have the perfect program to spark their passion!',
  program_cards: [
    { title: 'School Readiness Program', age_label: 'Toddler (1.5-3yo)', image_url: '/landing/program-1.jpg' },
    { title: 'Exploration Program', age_label: 'Preschool (3-6 y.o)', image_url: '/landing/program-2.jpg' },
    { title: 'Focused Program', age_label: 'Kids (6-12 y.o)', image_url: '/landing/program-3.jpg' },
  ],

  stats_title: 'The trust that we earned',
  stats_title_accent: 'trust',
  stats_image_url: '/landing/stats-kids.png',
  stats_items: [
    { value: '3', label: 'Dedicated locations' },
    { value: '3', label: 'Dedicated locations' },
    { value: '4.000', label: 'Little athlete registered' },
    { value: '4', label: 'International sports certification' },
    { value: '3', label: 'Dedicated locations' },
    { value: '3', label: 'Dedicated locations' },
  ],

  testimony_title: '420+ Happy Parents',
  testimonials: [
    { quote: 'Little Athlete has been incredible for our child. The coaches are patient and encouraging.', name: 'Jen** Wil***', stars: 5 },
    { quote: 'The semi private class are amazing! Our child gets the attention they need.', name: 'Dev** La***', stars: 5 },
  ],

  cta_title: 'Ready to join the Little Athlete family? 🌟',
  cta_desc: 'Start with a free trial class — no commitment needed.',
  cta_button_label: 'Start Your Free Trial',
  cta_button_url: 'https://wa.me/620000000000',
}

async function seed() {
  const singletons: Record<string, object> = {
    site_settings: siteSettings,
    page_landing: pageLanding,
    page_about: {},
    page_location: {},
    page_certification: {},
  }

  for (const [docId, data] of Object.entries(singletons)) {
    await adminDb.collection('singletons').doc(docId).set(data, { merge: true })
    console.log(`seeded singletons/${docId}`)
  }

  console.log('Seed selesai.')
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Seed gagal:', err)
    process.exit(1)
  })
```

- [ ] **Step 2: Run the seed against Firestore**

Run: `npm run seed`
Expected: console prints `seeded singletons/site_settings`, `seeded singletons/page_landing`, … and `Seed selesai.` with exit 0. (Requires `.env` with `NEXT_FIREBASE_ADMIN_*` — already present per design doc §3.)

- [ ] **Step 3: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat(seed): full default page_landing + site_settings content"
```

---

## Task 6: Reusable admin list editor

**Files:**
- Create: `src/components/admin/RepeatableList.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/admin/RepeatableList.tsx`:

```tsx
'use client'

import { Button } from '@/components/ui/button'

interface RepeatableListProps<T> {
	label: string
	items: T[]
	onChange: (items: T[]) => void
	newItem: () => T
	renderItem: (item: T, update: (patch: Partial<T>) => void) => React.ReactNode
}

export function RepeatableList<T>({
	label,
	items,
	onChange,
	newItem,
	renderItem,
}: RepeatableListProps<T>) {
	const update = (index: number, patch: Partial<T>) => {
		onChange(items.map((it, i) => (i === index ? { ...it, ...patch } : it)))
	}
	const remove = (index: number) => onChange(items.filter((_, i) => i !== index))

	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium">{label}</span>
				<Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, newItem()])}>
					+ Add
				</Button>
			</div>
			{items.map((item, i) => (
				<div key={i} className="flex items-start gap-2 rounded-md border p-3">
					<div className="grid flex-1 gap-2">{renderItem(item, (patch) => update(i, patch))}</div>
					<Button type="button" variant="ghost" size="sm" onClick={() => remove(i)}>
						Remove
					</Button>
				</div>
			))}
		</div>
	)
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/admin/RepeatableList.tsx
git commit -m "feat(admin): reusable RepeatableList editor"
```

---

## Task 7: Site Settings admin form

**Files:**
- Create: `src/components/admin/SiteSettingsForm.tsx`
- Modify: `src/app/admin/(dashboard)/settings/page.tsx`

- [ ] **Step 1: Create the client form**

Create `src/components/admin/SiteSettingsForm.tsx`:

```tsx
'use client'

import { useState, useTransition } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RepeatableList } from '@/components/admin/RepeatableList'
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
			<div className="grid gap-2">
				<Label>Logo URL</Label>
				<Input value={data.logo_url} onChange={(e) => set({ logo_url: e.target.value })} />
			</div>
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
```

- [ ] **Step 2: Wire the admin page (server component)**

Replace the **entire** contents of `src/app/admin/(dashboard)/settings/page.tsx` with:

```tsx
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
```

- [ ] **Step 3: Confirm the toast container exists**

Run: `grep -rn "Toaster" src/app`
Expected: a `<Toaster />` (from `@/components/ui/sonner`) is rendered in an admin layout. If **absent**, add it to `src/app/admin/(dashboard)/layout.tsx`: import `import { Toaster } from '@/components/ui/sonner'` and render `<Toaster />` just before the closing `</div>` of the root wrapper.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/admin/SiteSettingsForm.tsx "src/app/admin/(dashboard)/settings/page.tsx" "src/app/admin/(dashboard)/layout.tsx"
git commit -m "feat(admin): site settings edit form"
```

---

## Task 8: Landing admin form

**Files:**
- Create: `src/components/admin/LandingForm.tsx`
- Modify: `src/app/admin/(dashboard)/landing/page.tsx`

- [ ] **Step 1: Create the client form**

Create `src/components/admin/LandingForm.tsx`:

```tsx
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
```

- [ ] **Step 2: Wire the admin page (server component)**

Replace the **entire** contents of `src/app/admin/(dashboard)/landing/page.tsx` with:

```tsx
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
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/admin/LandingForm.tsx "src/app/admin/(dashboard)/landing/page.tsx"
git commit -m "feat(admin): landing page edit form"
```

---

## Task 9: Wire public layout header + footer to site_settings

**Files:**
- Modify: `src/app/(public)/layout.tsx` (full replace)

> Functional, data-wired header/footer (not yet pixel-perfect — that polish is Plan 2). Uses semantic tokens only (no raw hex), per design doc §8.

- [ ] **Step 1: Replace the public layout**

Replace the **entire** contents of `src/app/(public)/layout.tsx` with:

```tsx
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
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Build to verify server-render wiring**

Run: `npm run build`
Expected: build succeeds; `/` and admin routes compile with no type/render errors.

- [ ] **Step 4: Manual verification (dev server)**

Run: `npm run dev`, then check:
- `http://localhost:3000/` — header shows nav links from seed + green "Contact Us"; footer shows description, 3 link columns, copyright.
- `http://localhost:3000/admin/settings` — form pre-filled from seed; edit a nav label → Save → success toast.
- `http://localhost:3000/admin/landing` — form pre-filled from seed; edit hero title → Save → success toast.
- Reload `/` — the edited nav label appears (revalidation works).

Expected: all four behave as described. (Requires an admin session; log in at `/admin/login` first.)

- [ ] **Step 5: Commit**

```bash
git add "src/app/(public)/layout.tsx"
git commit -m "feat(public): wire header + footer to site_settings"
```

---

## Task 10: Update progress tracker

**Files:**
- Modify: `docs/superpowers/specs/2026-06-03-v2-revamp-design.md`

- [ ] **Step 1: Mark Landing data/admin progress**

In the progress table (section 0), update the **Modul Landing** row to note Plan 1 done and Plan 2 pending. Replace:

```markdown
| Modul Landing | (plan terpisah, dibuat saat Figma section siap) | ⬜ belum |
```

with:

```markdown
| Modul Landing — Plan 1 (data+admin+seed) | `plans/2026-06-04-landing-data-admin-seed.md` | ✅ selesai (2026-06-04) |
| Modul Landing — Plan 2 (halaman publik) | (plan terpisah, berikutnya) | ⬜ belum |
```

- [ ] **Step 2: Append a decision-log entry**

Add to section 10 (Log Keputusan), at the end:

```markdown
- **2026-06-04** — Mulai modul Landing. Token warna+font v2 terkunci (primary `#245BFF`, accent `#ED8F15`, surface-dark `#0F172A`, dst; font Parkinsans + Poppins) & di-port ke `globals.css`. Modul dipecah 2 plan: Plan 1 (data contract `ILandingPage`/`ISiteSettings` + server-db admin SDK + actions + seed + admin forms + header/footer wiring) selesai; Plan 2 = halaman publik pixel-perfect (slider via `react-fast-marquee`, testimoni via shadcn Carousel). Program cards & testimonials sementara di-denormalisasi ke `page_landing`.
```

- [ ] **Step 3: Commit**

```bash
git add docs/superpowers/specs/2026-06-03-v2-revamp-design.md
git commit -m "docs: mark Landing Plan 1 complete in progress tracker"
```

---

## Self-Review Notes

- **Spec coverage:** Landing sections (hero, slider, story, programs, stats, testimonials, CTA) → `ILandingPage` (Task 1) + seed (Task 5) + admin form (Task 8). Header/footer + nav + social + WA + global SEO → `ISiteSettings` (Task 2) + seed + form (Task 7) + layout (Task 9). Server-render via admin SDK + revalidation → Tasks 3–4. Seed singleton → Task 5. Central auth guard reused in actions → Task 4.
- **Out of scope (intentional, Plan 2 / later modules):** pixel-perfect public Landing styling, slider packages, Firebase Storage image-upload widget, dedicated `programs`/`testimonials`/`locations`/`certifications` collections, `generateMetadata`/JSON-LD for Landing.
- **Type consistency:** `validateUser()` → `{ isVerifyUser }` (matches `src/app/admin/(dashboard)/layout.tsx`). Singleton ids centralized in `SINGLETON_IDS` (`content.ts`) and reused by actions. `saveSingleton(id, data)` signature consistent across server-db, actions, tests.
- **Reconciliation hook (design doc §8 step 7):** if Plan 2 pixel-perfect work surfaces a new field, update `ILandingPage` + seed + `LandingForm` together.
