# Little Athlete v2 — Fase 0 (Foundation) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menyiapkan fondasi teknis v2 di branch `revamp` — Next.js 15.5 + Tailwind v4 + shadcn/ui, wiring Firebase v1 ter-port, struktur routing publik/admin, design token, DB helper lengkap, dan seed script — dengan app yang build & jalan.

**Architecture:** Lanjut di repo yang sama (Firebase `little-athlete-667e4`), kerja di branch `revamp` agar `main` (v1) tetap live. Total redesign: komponen v1 diganti, tapi semua wiring Firebase, config deploy, dan secret dipertahankan. Routing pakai App Router route groups `(public)` / `admin`.

**Tech Stack:** Next.js 15.5.19, React 19.2.7, TypeScript 5, Tailwind CSS v4.3, shadcn/ui (CLI 4.x), Firebase 12.14 (client) + firebase-admin 13.10 (server), Firestore, Firebase Storage, Firebase App Hosting.

**Sumber kebenaran desain:** `docs/superpowers/specs/2026-06-03-v2-revamp-design.md`. Token desain: `design-reference/tokens.md`.

**Scope catatan:** Plan ini TIDAK membangun konten/halaman per-modul (Landing dst.) — itu plan terpisah per modul saat section Figma tersedia. Plan ini berhenti di "app jalan, login admin jalan, semua skeleton siap diisi modul".

**Keputusan operasional:**
- Package manager: **npm** (hapus `yarn.lock`, pakai `package-lock.json`).
- Tailwind v4: config CSS-first (hapus `tailwind.config.ts`, theme di `globals.css`).
- Public reads via firebase-admin (server) — disiapkan di helper, dipakai penuh saat modul.

---

## File Structure (dibuat/diubah di Fase 0)

**Diubah:**
- `package.json` — bump deps, script `seed`
- `postcss.config.mjs` — plugin Tailwind v4
- `next.config.ts` — tetap (verifikasi `serverExternalPackages`)
- `src/app/layout.tsx` — root: font, init firebase-admin, slot JSON-LD
- `src/app/globals.css` — Tailwind v4 import + token shadcn
- `src/db/firestore/index.ts` — tambah `getAllDocs`, `deleteDoc`

**Dibuat:**
- `components.json` (oleh shadcn init)
- `src/lib/utils.ts` (oleh shadcn init — `cn()`)
- `src/lib/firebase-admin.ts` — singleton admin app + server reads
- `src/app/(public)/layout.tsx` + `page.tsx` + `about-us/`, `location/`, `certification/`, `program/`, `program/[slug]/`
- `src/app/admin/login/page.tsx`, `src/app/admin/(dashboard)/layout.tsx` + `page.tsx` + skeleton modul
- `src/app/robots.ts`, `src/app/sitemap.ts`
- `scripts/seed.ts`
- `src/db/firestore/index.test.ts` (test DB helper)

**Dihapus:**
- `tailwind.config.ts` (digantikan token CSS v4)
- `yarn.lock`
- Komponen v1 di `src/components/landing/*` dan `src/app/admin/*` lama (dibersihkan bertahap; placeholder baru menggantikan)

---

## Task 0: Branch `revamp` + commit baseline docs

**Files:**
- (git) buat branch, commit design docs yang sudah ada

- [ ] **Step 1: Buat & pindah ke branch revamp**

Run:
```bash
git checkout -b revamp
```
Expected: `Switched to a new branch 'revamp'`

- [ ] **Step 2: Commit dokumen desain + design-reference**

```bash
git add docs/superpowers design-reference
git commit -m "docs: add v2 revamp design spec, plan, and design-reference

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```
Expected: commit terbuat di branch `revamp`. `main` tidak tersentuh.

---

## Task 1: Standarisasi npm + bump dependencies

**Files:**
- Modify: `package.json`
- Delete: `yarn.lock`

- [ ] **Step 1: Hapus yarn.lock**

Run:
```bash
rm -f yarn.lock
```

- [ ] **Step 2: Ganti blok dependencies & devDependencies di `package.json`**

Ganti seluruh `"dependencies"` dan `"devDependencies"` (dan tambah script `seed`) menjadi:

```json
{
	"name": "little-athlete",
	"version": "0.2.0",
	"private": true,
	"scripts": {
		"dev": "next dev",
		"build": "next build",
		"start": "next start -p 8080",
		"lint": "next lint",
		"format": "prettier --write .",
		"seed": "tsx scripts/seed.ts"
	},
	"dependencies": {
		"clsx": "^2.1.1",
		"firebase": "^12.14.0",
		"firebase-admin": "^13.10.0",
		"lucide-react": "^1.17.0",
		"next": "15.5.19",
		"react": "^19.2.7",
		"react-dom": "^19.2.7",
		"react-hot-toast": "^2.5.1",
		"tailwind-merge": "^2.6.0"
	},
	"devDependencies": {
		"@eslint/eslintrc": "^3",
		"@tailwindcss/postcss": "^4.3.0",
		"@types/node": "^20",
		"@types/react": "^19",
		"@types/react-dom": "^19",
		"dotenv": "^16.4.7",
		"eslint": "^9",
		"eslint-config-next": "15.5.19",
		"eslint-config-prettier": "^10.0.1",
		"eslint-plugin-prettier": "^5.2.3",
		"prettier": "^3.4.2",
		"prettier-plugin-tailwindcss": "^0.6.10",
		"tailwindcss": "^4.3.0",
		"tsx": "^4.19.2",
		"typescript": "^5"
	}
}
```

> Catatan: animasi/slider v1 (`aos`, `keen-slider`, `swiper`, `react-fast-marquee`) sengaja DILEPAS dulu; ditambah lagi per-modul hanya jika section-nya butuh. `start` tidak lagi `next build && next start` (build dipisah).

- [ ] **Step 3: Install dari nol**

Run:
```bash
rm -rf node_modules package-lock.json && npm install
```
Expected: install sukses tanpa error peer-deps fatal. `package-lock.json` baru terbuat.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git rm --cached yarn.lock 2>/dev/null || true
git commit -m "chore: upgrade to Next 15.5 + Firebase 12, standardize on npm

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 2: Migrasi Tailwind v3 → v4

**Files:**
- Delete: `tailwind.config.ts`
- Modify: `postcss.config.mjs`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Hapus config Tailwind v3**

Run:
```bash
rm -f tailwind.config.ts
```

- [ ] **Step 2: Set `postcss.config.mjs` untuk Tailwind v4**

Ganti isi `postcss.config.mjs` menjadi:
```js
const config = {
	plugins: {
		'@tailwindcss/postcss': {},
	},
}

export default config
```

- [ ] **Step 3: Reset `src/app/globals.css` ke baseline Tailwind v4**

Ganti seluruh isi `src/app/globals.css` menjadi (token lengkap diisi shadcn di Task 3):
```css
@import 'tailwindcss';

:root {
	--background: #ffffff;
	--foreground: #0a0a0a;
}

body {
	background: var(--background);
	color: var(--foreground);
}
```

- [ ] **Step 4: Verifikasi build dev belum error Tailwind**

Run:
```bash
npm run build
```
Expected: build berjalan (boleh ada error lain dari komponen v1 lama — itu dibereskan di Task 4–7; yang penting TIDAK ada error PostCSS/Tailwind seperti "Cannot find module 'tailwindcss'").

> Jika build gagal HANYA karena file komponen v1 lama, lanjut — akan dibersihkan. Catat error-nya.

- [ ] **Step 5: Commit**

```bash
git add postcss.config.mjs src/app/globals.css
git rm --cached tailwind.config.ts 2>/dev/null || true
git commit -m "build: migrate to Tailwind CSS v4 (CSS-first config)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 3: Inisialisasi shadcn/ui

**Files:**
- Create: `components.json`, `src/lib/utils.ts`
- Modify: `src/app/globals.css` (token CSS variables ditambah CLI)

- [ ] **Step 1: Jalankan shadcn init**

Run:
```bash
npx shadcn@latest init -d
```
(`-d` = pakai default. Jika CLI bertanya base color, pilih `neutral`.)
Expected: terbuat `components.json`, `src/lib/utils.ts` (fungsi `cn`), dan `globals.css` ter-update dengan blok `:root`/`.dark` CSS variables + `@theme inline`.

- [ ] **Step 2: Pasang beberapa komponen dasar untuk admin**

Run:
```bash
npx shadcn@latest add button input label card table dialog sonner
```
Expected: file komponen muncul di `src/components/ui/`.

- [ ] **Step 3: Verifikasi `cn` helper ada**

Run:
```bash
cat src/lib/utils.ts
```
Expected: berisi fungsi `cn` yang menggabungkan `clsx` + `twMerge`.

- [ ] **Step 4: Commit**

```bash
git add components.json src/lib src/components/ui src/app/globals.css
git commit -m "feat: initialize shadcn/ui with base components

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 4: Port & verifikasi wiring Firebase

**Files:**
- Verify/Modify: `src/config/firebase.ts` (client)
- Create: `src/lib/firebase-admin.ts` (server singleton + reads)
- Modify: `src/app/layout.tsx` (init admin via helper baru)
- Verify: `src/utils/authValidation.ts`, `src/actions/loginAction.ts`, `next.config.ts`

- [ ] **Step 1: Verifikasi `src/config/firebase.ts` tetap valid di Firebase v12**

Buka `src/config/firebase.ts`. API (`initializeApp`, `getAuth`, `getFirestore`) sama di v12 — tidak perlu diubah. Pastikan tetap ada `export const auth` dan `export const firestore`.

- [ ] **Step 2: Buat `src/lib/firebase-admin.ts`**

Create `src/lib/firebase-admin.ts`:
```ts
import { cert, getApps, initializeApp, type App } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getAdminApp(): App {
	const existing = getApps()
	if (existing.length > 0) return existing[0]

	return initializeApp({
		credential: cert({
			projectId: process.env.NEXT_FIREBASE_ADMIN_PROJECT_ID,
			clientEmail: process.env.NEXT_FIREBASE_ADMIN_CLIENT_EMAIL,
			privateKey: process.env.NEXT_FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
		}),
	})
}

export const adminApp = getAdminApp()
export const adminDb = getFirestore(adminApp)
```

> Ini memusatkan init admin SDK (sebelumnya inline di `layout.tsx`). `adminDb` dipakai untuk server reads publik (strategi SEO).

- [ ] **Step 3: Sederhanakan `src/app/layout.tsx` untuk pakai helper**

Di `src/app/layout.tsx`, hapus blok `if (getApps().length == 0) { initializeApp({...}) }` dan import `cert/getApps/initializeApp`. Ganti dengan satu import:
```ts
import '@/lib/firebase-admin'
```
(import side-effect memastikan admin app ter-init di server). Pertahankan font Sora + Plus Jakarta Sans, `metadata`, dan struktur `<html>/<body>`.

- [ ] **Step 4: Verifikasi auth util tetap jalan**

Buka `src/utils/authValidation.ts` dan `src/actions/loginAction.ts` — keduanya tidak perlu perubahan (API `firebase-admin/auth` & `next/headers` sama). Pastikan tidak ada import yang rusak.

- [ ] **Step 5: Verifikasi `next.config.ts`**

Pastikan `next.config.ts` tetap memuat `serverExternalPackages: ['firebase-admin']` dan `images.remotePatterns`. Tidak ada perubahan wajib.

- [ ] **Step 6: Typecheck**

Run:
```bash
npx tsc --noEmit
```
Expected: tidak ada error pada `firebase-admin.ts`, `layout.tsx`, `authValidation.ts`, `loginAction.ts` (error pada komponen v1 lama yang belum dihapus diabaikan sementara).

- [ ] **Step 7: Commit**

```bash
git add src/lib/firebase-admin.ts src/app/layout.tsx
git commit -m "refactor: centralize firebase-admin init in lib/firebase-admin

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 5: Design token (nilai inti)

**Files:**
- Modify: `src/app/globals.css` (nilai CSS variables hasil shadcn)
- Reference: `design-reference/tokens.md`

- [ ] **Step 1: Isi nilai token inti yang sudah diketahui**

Di `src/app/globals.css`, pada blok `:root` yang dibuat shadcn, set `--primary` ke warna primary v2 dari `design-reference/tokens.md`. Jika `tokens.md` masih `TBD`, BIARKAN default shadcn dan tambahkan komentar:
```css
/* TODO(token): isi --primary v2 dari design-reference/tokens.md saat tersedia */
```
Sisanya (background, foreground, dst) biarkan default shadcn — diperhalus progresif per modul.

> Aturan keras: komponen selanjutnya WAJIB pakai util token (`bg-primary`, `text-foreground`), dilarang hex mentah `bg-[#xxxxxx]`.

- [ ] **Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "style: set core design tokens (primary placeholder, refined per module)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 6: Scaffolding route group `(public)`

**Files:**
- Create: `src/app/(public)/layout.tsx`, `src/app/(public)/page.tsx`, `src/app/(public)/about-us/page.tsx`, `src/app/(public)/location/page.tsx`, `src/app/(public)/certification/page.tsx`, `src/app/(public)/program/page.tsx`, `src/app/(public)/program/[slug]/page.tsx`
- Delete: `src/app/page.tsx` lama, `src/components/landing/*` lama
- Move: pindahkan home lama agar tidak bentrok

- [ ] **Step 1: Hapus halaman & komponen landing v1**

Run:
```bash
rm -f src/app/page.tsx
rm -rf src/components/landing
```

- [ ] **Step 2: Buat layout publik (placeholder header/footer)**

Create `src/app/(public)/layout.tsx`:
```tsx
export default function PublicLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="border-b">
				<nav className="mx-auto flex max-w-screen-xl items-center justify-between p-4">
					<span className="font-bold">Little Athlete</span>
					<span className="text-muted-foreground text-sm">v2 — header placeholder</span>
				</nav>
			</header>
			<main>{children}</main>
			<footer className="border-t p-4 text-center text-muted-foreground text-sm">
				footer placeholder
			</footer>
		</>
	)
}
```

- [ ] **Step 3: Buat placeholder tiap halaman publik**

Create `src/app/(public)/page.tsx`:
```tsx
export default function HomePage() {
	return <section className="p-8 text-2xl font-bold">Landing (v2) — placeholder</section>
}
```

Create `src/app/(public)/about-us/page.tsx`:
```tsx
export default function AboutPage() {
	return <section className="p-8">About Us — placeholder</section>
}
```

Create `src/app/(public)/location/page.tsx`:
```tsx
export default function LocationPage() {
	return <section className="p-8">Location — placeholder</section>
}
```

Create `src/app/(public)/certification/page.tsx`:
```tsx
export default function CertificationPage() {
	return <section className="p-8">Certification — placeholder</section>
}
```

Create `src/app/(public)/program/page.tsx`:
```tsx
export default function ProgramListPage() {
	return <section className="p-8">Program list — placeholder</section>
}
```

Create `src/app/(public)/program/[slug]/page.tsx`:
```tsx
export default async function ProgramDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	return <section className="p-8">Program detail: {slug} — placeholder</section>
}
```

- [ ] **Step 4: Verifikasi dev server merender semua route**

Run:
```bash
npm run dev
```
Lalu cek manual (browser/curl): `/`, `/about-us`, `/location`, `/certification`, `/program`, `/program/test`.
Expected: tiap route menampilkan placeholder + header/footer. Hentikan dev server setelah verifikasi.

- [ ] **Step 5: Commit**

```bash
git add src/app
git commit -m "feat: scaffold (public) route group with placeholder pages

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 7: Scaffolding admin shell

**Files:**
- Delete: `src/app/admin/home/*` lama, `src/app/admin/login/page.tsx` lama, `src/components/Admin/*` lama, `src/components/Sidebar/*` lama
- Create: `src/app/admin/login/page.tsx`, `src/app/admin/(dashboard)/layout.tsx`, `src/app/admin/(dashboard)/page.tsx`, dan skeleton modul: `settings/`, `landing/`, `about/`, `programs/`, `locations/`, `certifications/`, `testimonials/` (masing-masing `page.tsx`)

- [ ] **Step 1: Bersihkan admin v1**

Run:
```bash
rm -rf src/app/admin/home
rm -rf src/components/Admin src/components/Sidebar
rm -f src/app/admin/login/page.tsx
```

- [ ] **Step 2: Buat halaman login (server component + guard redirect)**

Create `src/app/admin/login/page.tsx`:
```tsx
import { redirect } from 'next/navigation'
import { validateUser } from '@/utils/authValidation'

export default async function LoginPage() {
	const { isVerifyUser } = await validateUser()
	if (isVerifyUser) redirect('/admin')

	return (
		<main className="flex min-h-screen items-center justify-center bg-secondary">
			<div className="rounded-lg bg-white p-8 shadow">
				<h1 className="text-xl font-bold">Admin Login — placeholder</h1>
				<p className="text-muted-foreground text-sm">Form login dibangun saat modul auth.</p>
			</div>
		</main>
	)
}
```

- [ ] **Step 3: Buat layout dashboard dengan guard auth + sidebar placeholder**

Create `src/app/admin/(dashboard)/layout.tsx`:
```tsx
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { validateUser } from '@/utils/authValidation'

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
			<aside className="w-60 border-r p-4">
				<div className="mb-4 font-bold">Little Athlete CMS</div>
				<nav className="flex flex-col gap-1">
					{NAV.map((item) => (
						<Link key={item.href} href={item.href} className="rounded px-2 py-1 hover:bg-muted">
							{item.label}
						</Link>
					))}
				</nav>
			</aside>
			<div className="flex-1 p-6">{children}</div>
		</div>
	)
}
```

- [ ] **Step 4: Buat placeholder dashboard + tiap modul**

Create `src/app/admin/(dashboard)/page.tsx`:
```tsx
export default function DashboardPage() {
	return <h1 className="text-2xl font-bold">Dashboard — placeholder</h1>
}
```

Buat file `page.tsx` berikut, masing-masing dengan pola yang sama (ganti `LABEL`):
- `src/app/admin/(dashboard)/settings/page.tsx` → LABEL `Site Settings`
- `src/app/admin/(dashboard)/landing/page.tsx` → LABEL `Landing Page`
- `src/app/admin/(dashboard)/about/page.tsx` → LABEL `About Us`
- `src/app/admin/(dashboard)/programs/page.tsx` → LABEL `Programs`
- `src/app/admin/(dashboard)/locations/page.tsx` → LABEL `Locations`
- `src/app/admin/(dashboard)/certifications/page.tsx` → LABEL `Certifications`
- `src/app/admin/(dashboard)/testimonials/page.tsx` → LABEL `Testimonials`

Isi tiap file (contoh untuk settings):
```tsx
export default function SettingsAdminPage() {
	return <h1 className="text-2xl font-bold">Site Settings — placeholder</h1>
}
```
(Untuk file lain: ganti nama fungsi unik, mis. `LandingAdminPage`, `AboutAdminPage`, `ProgramsAdminPage`, `LocationsAdminPage`, `CertificationsAdminPage`, `TestimonialsAdminPage`, dan teks LABEL-nya.)

- [ ] **Step 5: Verifikasi guard redirect**

Run:
```bash
npm run dev
```
Buka `/admin` tanpa login → Expected: redirect ke `/admin/login`. Hentikan dev server.

- [ ] **Step 6: Commit**

```bash
git add src/app/admin
git commit -m "feat: scaffold admin dashboard shell with auth guard and module routes

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 8: Lengkapi DB helper (`getAllDocs`, `deleteDoc`) — TDD

**Files:**
- Modify: `src/db/firestore/index.ts`
- Test: `src/db/firestore/index.test.ts`
- Modify: `package.json` (script test) jika belum ada test runner

> Test runner: pakai `vitest` (ringan, cocok TS/ESM).

- [ ] **Step 1: Pasang vitest**

Run:
```bash
npm install -D vitest
```
Lalu tambahkan ke `scripts` di `package.json`: `"test": "vitest run"`.

- [ ] **Step 2: Tulis test yang gagal**

Create `src/db/firestore/index.test.ts`:
```ts
import { describe, expect, it, vi } from 'vitest'

// Mock firebase/firestore agar helper bisa diuji tanpa koneksi nyata
vi.mock('firebase/firestore', () => ({
	collection: vi.fn((_db, name) => ({ name })),
	getDocs: vi.fn(async () => ({
		docs: [
			{ id: 'a', data: () => ({ title: 'A' }) },
			{ id: 'b', data: () => ({ title: 'B' }) },
		],
	})),
	doc: vi.fn((_db, coll, id) => ({ coll, id })),
	deleteDoc: vi.fn(async () => undefined),
	addDoc: vi.fn(),
	getDoc: vi.fn(),
	setDoc: vi.fn(),
}))
vi.mock('@/config/firebase', () => ({ firestore: {} }))

import { getAllDocs, deleteDocById } from './index'

describe('getAllDocs', () => {
	it('mengembalikan semua dokumen beserta id', async () => {
		const result = await getAllDocs('programs')
		expect(result).toEqual([
			{ id: 'a', title: 'A' },
			{ id: 'b', title: 'B' },
		])
	})
})

describe('deleteDocById', () => {
	it('memanggil deleteDoc untuk doc yang benar', async () => {
		const { deleteDoc } = await import('firebase/firestore')
		await deleteDocById('programs', 'a')
		expect(deleteDoc).toHaveBeenCalledWith({ coll: 'programs', id: 'a' })
	})
})
```

- [ ] **Step 3: Jalankan test — harus GAGAL**

Run:
```bash
npm test
```
Expected: FAIL — `getAllDocs` / `deleteDocById` belum diekspor dari `./index`.

- [ ] **Step 4: Implementasi helper**

Di `src/db/firestore/index.ts`, tambahkan import `getDocs` dan `deleteDoc as fbDeleteDoc`, lalu tambahkan fungsi:
```ts
import {
	addDoc,
	collection,
	deleteDoc as fbDeleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
} from 'firebase/firestore'
import { firestore } from '@/config/firebase'

// ...fungsi insertDoc, updateDoc, getOneDocById yang sudah ada tetap...

export async function getAllDocs(collName: string) {
	const snap = await getDocs(collection(firestore, collName))
	return snap.docs.map((d) => ({ ...d.data(), id: d.id }))
}

export async function deleteDocById(collName: string, id: string) {
	await fbDeleteDoc(doc(firestore, collName, id))
}
```

> Catatan: ganti import `deleteDoc` lama (jika ada) agar tidak bentrok nama — di sini dialias `fbDeleteDoc`.

- [ ] **Step 5: Jalankan test — harus LULUS**

Run:
```bash
npm test
```
Expected: PASS (2 test).

- [ ] **Step 6: Commit**

```bash
git add src/db/firestore/index.ts src/db/firestore/index.test.ts package.json package-lock.json
git commit -m "feat: add getAllDocs and deleteDocById firestore helpers (tested)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 9: Seed script skeleton

**Files:**
- Create: `scripts/seed.ts`

- [ ] **Step 1: Buat seed script**

Create `scripts/seed.ts`:
```ts
import 'dotenv/config'
import { adminDb } from '../src/lib/firebase-admin'

/**
 * Seed dokumen singleton awal supaya admin langsung ada yang diedit.
 * Jalankan: npm run seed
 * Data per-modul ditambah saat modul dikerjakan.
 */
async function seed() {
	const singletons: Record<string, object> = {
		site_settings: { logo_url: '', wa_url: '', social_media_data: [] },
		page_landing: {},
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

> Catatan struktur: singleton disimpan sebagai dokumen di collection `singletons` (mis. `singletons/page_landing`) agar rapi. Helper baca singleton memakai `getOneDocById('singletons', 'page_landing')`. Struktur field tiap singleton diisi saat modulnya dikerjakan.

- [ ] **Step 2: Jalankan seed (butuh `.env` terisi)**

Run:
```bash
npm run seed
```
Expected: output `seeded singletons/...` untuk tiap dokumen, lalu `Seed selesai.`

> Jika gagal soal private key: pastikan `NEXT_FIREBASE_ADMIN_PRIVATE_KEY` di `.env` benar (newline ter-escape `\n`). Helper `firebase-admin.ts` sudah `.replace(/\\n/g, '\n')`.

- [ ] **Step 3: Commit**

```bash
git add scripts/seed.ts
git commit -m "feat: add seed script skeleton for singleton documents

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 10: Fondasi SEO (robots, sitemap, JSON-LD)

**Files:**
- Create: `src/app/robots.ts`, `src/app/sitemap.ts`
- Modify: `src/app/layout.tsx` (JSON-LD Organization)

- [ ] **Step 1: Buat `robots.ts`**

Create `src/app/robots.ts`:
```ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://littleathlete.com'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: { userAgent: '*', allow: '/', disallow: '/admin' },
		sitemap: `${BASE_URL}/sitemap.xml`,
	}
}
```

- [ ] **Step 2: Buat `sitemap.ts` (statis dulu, slug program ditambah saat modul Program)**

Create `src/app/sitemap.ts`:
```ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://littleathlete.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticRoutes = ['', '/about-us', '/location', '/certification', '/program']
	return staticRoutes.map((path) => ({
		url: `${BASE_URL}${path}`,
		lastModified: new Date(),
	}))
}
```
> TODO(modul Program): tambahkan entri `/program/[slug]` dari `getAllDocs('programs')`.

- [ ] **Step 3: Tambah JSON-LD Organization di root layout**

Di `src/app/layout.tsx`, di dalam `<head>`, tambahkan script JSON-LD:
```tsx
<script
	type="application/ld+json"
	dangerouslySetInnerHTML={{
		__html: JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Little Athlete',
			url: 'https://littleathlete.com',
		}),
	}}
/>
```
> TODO(modul Settings/Location): isi `logo`, `sameAs` (social), `address` (LocalBusiness) dari Firestore.

- [ ] **Step 4: Verifikasi**

Run:
```bash
npm run dev
```
Cek `/robots.txt` dan `/sitemap.xml` ter-generate. Hentikan dev server.

- [ ] **Step 5: Commit**

```bash
git add src/app/robots.ts src/app/sitemap.ts src/app/layout.tsx
git commit -m "feat: add SEO foundations (robots, sitemap, Organization JSON-LD)

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

---

## Task 11: Build hijau + smoke test deploy

**Files:** —

- [ ] **Step 1: Lint + typecheck + test**

Run:
```bash
npx tsc --noEmit && npm run lint && npm test
```
Expected: semua hijau. Tidak boleh ada sisa import ke komponen v1 yang sudah dihapus.

- [ ] **Step 2: Production build**

Run:
```bash
npm run build
```
Expected: `Compiled successfully`. Route `(public)` & `admin` muncul di output build. Tidak ada error.

- [ ] **Step 3: Jalankan production build lokal**

Run:
```bash
npm run start
```
Buka `http://localhost:8080` → landing placeholder tampil; `/admin` → redirect ke login. Hentikan server.

- [ ] **Step 4: Commit penanda Fase 0 selesai**

```bash
git commit --allow-empty -m "chore: Fase 0 foundation complete

Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>"
```

- [ ] **Step 5: (Manual, oleh user) Smoke test deploy App Hosting**

Karena App Hosting auto-deploy dari `main`, deploy v2 BARU terjadi saat merge ke `main`. Untuk verifikasi dini tanpa mengganggu v1 live, opsi:
- Push branch `revamp` ke remote (`git push -u origin revamp`) dan, jika diinginkan, buat backend App Hosting kedua yang men-track branch `revamp` (staging) di Firebase Console.
- Atau cukup andalkan build lokal hijau (Step 2) sebagai bukti siap-deploy, dan deploy sungguhan saat merge.

> Keputusan staging vs tunggu-merge diserahkan ke user; tidak memblokir penyelesaian Fase 0.

---

## Self-Review (sudah dijalankan penulis plan)

- **Spec coverage:** Fase 0 (Bagian 8 spec) tercakup — branch, upgrade Next, shadcn, port Firebase, layout, token, DB helper, seed. Routing (Bagian 9) tercakup Task 6–7. SEO fondasi (Bagian 6) tercakup Task 10. Modul konten (Bagian 4/5/7) sengaja di luar scope (plan terpisah).
- **Placeholder scan:** Komentar `TODO(...)` yang tersisa adalah penanda hand-off antar-modul yang disengaja (token value, sitemap slug, JSON-LD detail), bukan langkah yang belum jelas. Semua langkah eksekusi punya perintah & konten konkret.
- **Type consistency:** Helper bernama konsisten `getAllDocs`, `deleteDocById` (test & implementasi cocok). `adminDb` dipakai konsisten di `firebase-admin.ts` & `seed.ts`. `validateUser()`/`isVerifyUser` konsisten dengan util v1 yang dipertahankan.
```
